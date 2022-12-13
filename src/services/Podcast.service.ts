import { parse } from 'rss-to-json';
import http from './http-services/http';
import { API } from 'utils/constants/api.constants';
import { IPodcastDetails, IPodcastDetailRSS } from 'utils/interfaces/api/podcast_details.interface';
import { IPodcasts } from 'utils/interfaces/api/podcasts.interface';

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
        const rss = (await parse(_response.results[0].feedUrl)) as IPodcastDetailRSS;
        rss.items = rss.items.map(item => ({
          description: item.description,
          title: item.title,
          published: item.published,
          itunes_duration: item.itunes_duration,
          enclosures: item.enclosures,
        }));
        rss.podcastId = _response.results[0].collectionId;
        rss.artistName = _response.results[0].artistName;
        return rss;
      })
      .catch(error => {
        throw error;
      });
  };

  return { getPodcasts, getPodcastDetails };
};

export default PodcastService();
