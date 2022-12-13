import http from './http-services/http';
import { API } from 'utils/constants/api.constants';
import { IPodcastDetails, IPodcastDetailRSS } from 'utils/interfaces/api/podcast_details.interface';
import { IPodcasts } from 'utils/interfaces/api/podcasts.interface';
import { XMLParser } from 'fast-xml-parser';
import axios, { AxiosResponse } from 'axios';

const PodcastService = () => {
  const getPodcasts = async (): Promise<IPodcasts> => {
    return http
      .GET({ path: API.PODCASTS })
      .then(response => response as IPodcasts)
      .catch(error => {
        throw error;
      });
  };

  const getPodcastDetails = async (podcastId: string): Promise<IPodcastDetailRSS> => {
    // This endpoint doesn't returns track list. I'm using feedUrl that returns an xml,
    // so parsing it I can obtain track list and track details.
    // In order to avoid storing unneeded information, the amount of data sent is limited.
    return http
      .GET({ path: API.PODCAST_DETAIL(podcastId) })
      .then(async response => {
        const _response = response as IPodcastDetails;
        const rss = (await axios.get(response.results[0].feedUrl)) as AxiosResponse;
        const parser = new XMLParser({ ignoreAttributes: false });
        const details = parser.parse(rss.data).rss.channel as IPodcastDetailRSS;
        details.item = details.item.map(item => ({
          description: item.description,
          title: item.title,
          pubDate: item.pubDate,
          ['itunes:duration']: item['itunes:duration'],
          id: typeof item.guid === 'string' ? item.guid : item.guid ? item.guid['#text'] : '',
          enclosure: item.enclosure,
        }));
        details.podcastId = _response.results[0].collectionId;
        details.artistName = _response.results[0].artistName;
        return details;
      })
      .catch(error => {
        throw error;
      });
  };

  return { getPodcasts, getPodcastDetails };
};

export default PodcastService();
