export interface IPodcasts {
  feed: {
    entry: IPodcast[];
  };
}

interface IPodcast {
  'im:name': IPodcastName;
  'im:image': IPodcastImage[];
  summary: IPodcastSummary;
  'im:price': IPodcastPrice;
  'im:contentType': IPodcastContentType;
  rights: IPodcastRights;
  title: IPodcastTitle;
  link: IPodcastLink;
  id: IPodcastId;
  'im:artist': IPodcastArtist;
  category: IPodcastCategory;
  'im:releaseDate': IPodcastReleaseDate;
}

interface IPodcastContent {
  label: string;
}

interface IPodcastName extends IPodcastContent {}

interface IPodcastImage extends IPodcastContent {
  attributes: {
    height: string;
  };
}

interface IPodcastSummary extends IPodcastContent {}

interface IPodcastPrice extends IPodcastContent {
  attributes: {
    amount: string;
    currency: string;
  };
}

interface IPodcastContentType {
  attributes: {
    term: string;
    label: string;
  };
}

interface IPodcastRights extends IPodcastContent {}

interface IPodcastTitle extends IPodcastContent {}

interface IPodcastLink {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

interface IPodcastId extends IPodcastContent {
  attributes: {
    'im:id': string;
  };
}

interface IPodcastArtist extends IPodcastContent {
  attributes: {
    href: string;
  };
}

interface IPodcastCategory {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
}

interface IPodcastReleaseDate extends IPodcastContent {
  attributes: {
    label: string;
  };
}
