import http from './http-services/http';
import { API } from 'utils/constants/api.constants';
import { IPodcastDetails, IPodcastDetailRSS } from 'utils/interfaces/api/podcast_details.interface';
import { IPodcasts } from 'utils/interfaces/api/podcasts.interface';
import { parse } from 'rss-to-json';

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
    return http
      .GET({ path: API.PODCAST_DETAIL(podcastId) })
      .then(async response => {
        const _response = response as IPodcastDetails;
        const rss = (await parse(_response.results[0].feedUrl)) as IPodcastDetailRSS;
        console.log('rss', rss);
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
