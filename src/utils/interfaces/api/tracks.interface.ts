export interface ITrackDetails {
  content: string;
  content_encoded: string;
  created: number;
  description: string;
  enclosures: IAudioTrack[];
  id: string;
  itunes_duration: string;
  itunes_episodeType: string;
  itunes_image: { href: string };
  link: string;
  published: number;
  title: string;
}

interface IAudioTrack {
  length: string;
  type: string;
  url: string;
}
