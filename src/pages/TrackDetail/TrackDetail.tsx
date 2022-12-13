import { useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import PodcastService from 'services/Podcast.service';
import { PodcastContext } from 'providers/PodcastProvider';
import { Colors } from 'theme/Colors';
import Expirestorage from 'utils/functions/Expirestorage';
import { IPodcastDetailRSS } from 'utils/interfaces/api/podcast_details.interface';
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from 'utils/constants/storage.constants';
import { ITrackDetails } from 'utils/interfaces/api/tracks.interface';
import Typography, { TypographyTypes } from 'components/atoms/Typography';
import PodcastCard from 'components/molecules/Cards/PodcastCard';
import Layout from 'components/molecules/Layout';
import {
  ParsedDescriptionText,
  TrackDetailSectionContainer,
  TrackDetailWrapper,
  Audio,
} from './TrackDetail.styled';

const TrackDetail = () => {
  const { podcastId, episodeId } = useParams();
  const { setLoading } = useContext(PodcastContext);
  const [podcastDetails, setPodcastDetails] = useState<IPodcastDetailRSS>();
  const [trackDetails, setTrackDetails] = useState<ITrackDetails>();

  useEffect(() => {
    setLoading(true);

    const _getPodcastDetails = async (_podcastId: string, _episodeId: string) => {
      const storageData = Expirestorage.getItem(EStorageItems.PODCAST_DETAILS + podcastId);
      if (storageData) {
        setLoading(false);
        const _podcastDetails = JSON.parse(storageData) as IPodcastDetailRSS;
        setTrackDetails(_podcastDetails.items[_episodeId]);
        setPodcastDetails(_podcastDetails);
        return;
      }
      try {
        const response = await PodcastService.getPodcastDetails(_podcastId);
        Expirestorage.setItem(
          EStorageItems.PODCAST_DETAILS + _podcastId,
          JSON.stringify(response),
          PODCASTS_EXPIRE_INTERVAL,
        );
        setTrackDetails(response.items[_episodeId]);
        setPodcastDetails(response);
        setLoading(false);
      } catch (error) {
        console.error(`Track details from podcast id: ${podcastId} not found`);
      }
    };

    podcastId && episodeId && _getPodcastDetails(podcastId, episodeId);
  }, [podcastId]);

  return (
    <Layout>
      {podcastDetails && trackDetails && (
        <TrackDetailWrapper>
          <PodcastCard podcastDetails={podcastDetails} />
          <TrackDetailSectionContainer>
            <Typography type={TypographyTypes.H3} color={Colors.gray1000}>
              {trackDetails?.title}
            </Typography>
            <ParsedDescriptionText>
              {ReactHtmlParser(trackDetails?.description)}
            </ParsedDescriptionText>
            <Audio src={trackDetails.enclosures[0].url} controls></Audio>
          </TrackDetailSectionContainer>
        </TrackDetailWrapper>
      )}
    </Layout>
  );
};

export default TrackDetail;
