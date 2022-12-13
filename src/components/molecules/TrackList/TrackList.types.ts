import { ITrackDetails } from 'utils/interfaces/api/tracks.interface';

export type TrackListProps = {
  episodeId: number;
  tracks: ITrackDetails[];
};

export type TDProps = {
  index?: number;
};
