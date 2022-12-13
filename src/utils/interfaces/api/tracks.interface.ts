export interface ITrackDetails {
  ['content:encoded']?: string;
  description: string;
  enclosure: { ['@_url']: string };
  guid?: { ['#text']: string };
  id: string;
  ['itunes:duration']: string;
  ['itunes:episodeType']?: string;
  ['itunes:explicit']?: boolean;
  ['itunes:image']?: string;
  ['itunes:keywords']?: string;
  ['itunes:subtitle']?: string;
  link?: string;
  pubDate: string;
  title: string;
}
