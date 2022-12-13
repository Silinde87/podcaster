import { TrackDetails } from 'utils/interfaces/api/tracks.interface';

export type TrackListProps = {
  episodeId: number;
  tracks: TrackDetails[];
};

export type TDProps = {
  index?: number;
};
