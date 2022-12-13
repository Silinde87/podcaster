import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes.constants';
import { EpochToDateDDMMYYYY } from 'utils/functions/DateFormatter';
import { TH, Table, TD } from './TrackList.styled';
import { TrackListProps } from './TrackList.types';

const TracksList: React.FC<TrackListProps> = ({ episodeId, tracks }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TH style={{ width: '80%', paddingLeft: 8 }}>Title</TH>
          <TH style={{ width: '10%' }}>Date</TH>
          <TH style={{ width: '10%' }}>Duration</TH>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track, index) => (
          <tr key={index}>
            <TD index={index} style={{ paddingLeft: 8 }}>
              <Link to={ROUTES.TRACK_DETAIL_WITH_PARAM(episodeId, index)}>{track.title}</Link>
            </TD>
            <TD index={index}>{EpochToDateDDMMYYYY(track.published)}</TD>
            <TD index={index} style={{ textAlign: 'center' }}>
              {track['itunes_duration']}
            </TD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TracksList;
