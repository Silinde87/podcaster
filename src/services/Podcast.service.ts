import http from './http-services/http';
import { API } from 'utils/constants/api.constants';

// TODO: Set proper response types
const PodcastService = () => {
  const getPodcasts = async (): Promise<any> => {
    return http
      .GET({ path: API.PODCASTS })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };

  const getPodcastDetails = async (podcastId: string): Promise<any> => {
    return http
      .GET({ path: API.PODCAST_DETAIL(podcastId) })
      .then(response => response)
      .catch(error => {
        throw error;
      });
  };

  return { getPodcasts, getPodcastDetails };
};

export default PodcastService();
