import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes.constants';
import { TH, Table, TD } from './TrackList.styled';
import { TrackListProps } from './TrackList.types';

// TODO: Set proper tracks keys once tracks mock is removed
const TracksList: React.FC<TrackListProps> = ({ episodeId, tracks }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TH style={{ width: '80%', paddingLeft: 8 }}>Title</TH>
          <TH style={{ width: '12%' }}>Date</TH>
          <TH style={{ width: '8%' }}>Duration</TH>
        </tr>
      </thead>
      <tbody>
        {tracks.map((val, index) => (
          <tr key={val.id}>
            <TD index={index} style={{ paddingLeft: 8 }}>
              <Link to={ROUTES.TRACK_DETAIL_WITH_PARAM(episodeId, val.id)}>{val.title}</Link>
            </TD>
            <TD index={index}>{val.date}</TD>
            <TD index={index} style={{ textAlign: 'center' }}>
              {val.duration}
            </TD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TracksList;
