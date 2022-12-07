export const API = {
  PODCASTS: '/us/rss/toppodcasts/limit=100/genre=1310/json',
  PODCAST_DETAIL: (podcastId: string) => `/lookup?id=${podcastId}`
};
