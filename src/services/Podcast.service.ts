import http from './http-services/http';
import { API } from 'utils/constants/api.constants';
import { IPodcastDetails } from 'utils/interfaces/api/podcast_details.interface';
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

  const getPodcastDetails = async (podcastId: string): Promise<IPodcastDetails> => {
    return http
      .GET({ path: API.PODCAST_DETAIL(podcastId) })
      .then(response => response as IPodcastDetails)
      .catch(error => {
        throw error;
      });
  };

  return { getPodcasts, getPodcastDetails };
};

export default PodcastService();
