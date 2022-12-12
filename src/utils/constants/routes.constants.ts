export const ROUTES = {
  HOME: '/',
  PODCAST_DETAIL: '/podcast/:podcastId',
  PODCAST_DETAIL_WITH_PARAM: (podcastId: string) => `/podcast/${podcastId}`,
  TRACK_DETAIL: '/podcast/:podcastId/episode/:episodeId',
  TRACK_DETAIL_WITH_PARAM: (podcastId: number, episodeId: string) =>
    `/podcast/${podcastId}/episode/${episodeId}`,
};
