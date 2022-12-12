import { useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import PodcastService from 'services/Podcast.service';
import { PodcastContext } from 'providers/PodcastProvider';
import { Colors } from 'theme/Colors';
import Expirestorage from 'utils/functions/Expirestorage';
import { IPodcastDetail } from 'utils/interfaces/api/podcast_details.interface';
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from 'utils/constants/storage.constants';
import Typography, { TypographyTypes } from 'components/atoms/Typography';
import PodcastCard from 'components/molecules/Cards/PodcastCard';
import Layout from 'components/molecules/Layout';
import {
  ParsedDescriptionText,
  TrackDetailSectionContainer,
  TrackDetailWrapper,
  Audio,
} from './TrackDetail.styled';

// TODO: Use definitive track information from endpoint
const trackDetails = {
  title: 'Wilco - Magnetized',
  description:
    'Being a rockstar is a lot of hard work but it’s got nothing on being a dad; just ask Jaret Reddick + Gary Wiseman. You might know them from Bowling For Soup but behind the pop punk singalongs, they’re just two guys trying to get through bullies, vasectomies, and everything else that comes with being “Dad”.\n\n\n\nEvery week Jaret + Gary will invite other rockstar dads on air to talk about the highs and lows of parenting between band practice. Whether you’re a dad, you have a dad, or you just like dad jokes, The Rockstar Dad Podcast is about to make Monday so much better.',
  previewUrl:
    'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f6/5e/db/f65edb24-89fc-7886-8282-16bec46c0abb/mzaf_9268989284223212324.plus.aac.p.m4a',
};

const TrackDetail = () => {
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
        console.error(`Track details from podcast id: ${podcastId} not found`);
      }
    };
    podcastId && _getPodcastDetails(podcastId);
  }, [podcastId]);

  return (
    <Layout>
      {podcastDetails && (
        <TrackDetailWrapper>
          <PodcastCard podcastDetails={podcastDetails} />
          <TrackDetailSectionContainer>
            <Typography type={TypographyTypes.H3} color={Colors.gray1000}>
              {trackDetails.title}
            </Typography>
            <ParsedDescriptionText>
              {ReactHtmlParser(trackDetails.description)}
            </ParsedDescriptionText>
            <Audio src={trackDetails.previewUrl} controls></Audio>
          </TrackDetailSectionContainer>
        </TrackDetailWrapper>
      )}
    </Layout>
  );
};

export default TrackDetail;
