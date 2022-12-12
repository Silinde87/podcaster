import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PodcastService from 'services/Podcast.service';
import Expirestorage from 'utils/functions/Expirestorage';
import { IPodcastDetail } from 'utils/interfaces/api/podcast_details.interface';
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from 'utils/constants/storage.constants';
import { Colors } from 'theme/Colors';
import PodcastCard from 'components/molecules/Cards/PodcastCard';
import Layout from 'components/molecules/Layout';
import Typography, { TypographyTypes } from 'components/atoms/Typography';
import TrackList from 'components/molecules/TrackList';
import {
  PodcastDetailWrapper,
  PodcastListSectionContainer,
  PodcastListWrapper,
} from './PodcastDetail.styled';
import { PodcastContext } from 'providers/PodcastProvider';

// TODO: Tracks mock.
const tracks = [
  { title: 'Clipping - Work work', date: '18/2/2016', duration: '15:03', id: '1' },
  { title: 'Clipping - Work work', date: '18/2/2016', duration: '15:03', id: '2' },
  { title: 'Clipping - Work work', date: '18/2/2016', duration: '15:03', id: '3' },
  { title: 'Clipping - Work work', date: '18/2/2016', duration: '15:03', id: '4' },
  { title: 'Clipping - Work work', date: '18/2/2016', duration: '15:03', id: '5' },
  { title: 'Clipping - Work work', date: '18/2/2016', duration: '15:03', id: '6' },
];

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { setLoading } = useContext(PodcastContext);
  const [podcastDetails, setPodcastDetails] = useState<IPodcastDetail>();

  useEffect(() => {
    setLoading(true);
    const _getPodcastDetails = async (_podcastId: string) => {
      const storageData = Expirestorage.getItem(EStorageItems.PODCAST_DETAILS + podcastId);
      if (storageData) {
        setLoading(false);
        setPodcastDetails(JSON.parse(storageData));
        return;
      }
      try {
        const response = await PodcastService.getPodcastDetails(_podcastId);
        if (response.resultCount > 0) {
          Expirestorage.setItem(
            EStorageItems.PODCAST_DETAILS + _podcastId,
            JSON.stringify(response.results[0]),
            PODCASTS_EXPIRE_INTERVAL,
          );
          setPodcastDetails(response.results[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error(`Podcast details with id: ${podcastId} not found`);
      }
    };
    podcastId && _getPodcastDetails(podcastId);
  }, [podcastId]);

  return (
    <Layout>
      {podcastDetails && (
        <PodcastDetailWrapper>
          <PodcastCard podcastDetails={podcastDetails} />
          <PodcastListWrapper>
            <PodcastListSectionContainer>
              <Typography type={TypographyTypes.H2} color={Colors.gray1000}>
                Episodes:
              </Typography>
            </PodcastListSectionContainer>
            <PodcastListSectionContainer>
              <TrackList episodeId={podcastDetails.collectionId} tracks={tracks} />
            </PodcastListSectionContainer>
          </PodcastListWrapper>
        </PodcastDetailWrapper>
      )}
    </Layout>
  );
};

export default PodcastDetail;
