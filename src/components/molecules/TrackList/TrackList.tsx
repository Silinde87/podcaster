import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes.constants';
import { stringToDateDDMMYYYY } from 'utils/functions/DateFormatter';
import { secondsToHHMMSS } from 'utils/functions/TimeFormatter';
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
          <tr key={track.id}>
            <TD index={index} style={{ paddingLeft: 8 }}>
              <Link to={ROUTES.TRACK_DETAIL_WITH_PARAM(episodeId, track.id)}>{track.title}</Link>
            </TD>
            <TD index={index}>{stringToDateDDMMYYYY(track.pubDate)}</TD>
            <TD index={index} style={{ textAlign: 'center' }}>
              {typeof track['itunes:duration'] === 'number'
                ? secondsToHHMMSS(track['itunes:duration'])
                : track['itunes:duration']}
            </TD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TracksList;
