export const ROUTES = {
  HOME: '/',
  PODCAST_DETAIL: '/podcast/:podcastId',
  PODCAST_DETAIL_WITH_PARAM: (podcastId: string) => `/podcast/${podcastId}`,
};
