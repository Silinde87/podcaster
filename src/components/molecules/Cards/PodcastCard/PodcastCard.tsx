import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PodcastContext } from 'providers/PodcastProvider';
import { ROUTES } from 'utils/constants/routes.constants';
import { Colors } from 'theme/Colors';
import Typography, { TypographyTypes } from 'components/atoms/Typography';
import {
  DescriptionWrapper,
  PodcastCardContainer,
  PodcastCardImage,
  TitleWrapper,
} from './PodcastCard.styled';
import { PodcastCardProps } from './PodcastCard.types';

const PodcastCard: React.FC<PodcastCardProps> = ({ podcastDetails }) => {
  const { podcasts } = useContext(PodcastContext);
  const [description, setDescription] = useState<string>('');
  const podcastId = podcastDetails.collectionId.toString();

  useEffect(() => {
    const podcast = podcasts.find(podcast => podcast.id.attributes['im:id'] === podcastId);
    if (podcast) {
      setDescription(podcast.summary.label);
    }
  }, [podcasts]);

  return (
    <PodcastCardContainer>
      <Link to={ROUTES.PODCAST_DETAIL_WITH_PARAM(podcastId)} style={{ alignSelf: 'center' }}>
        <PodcastCardImage src={podcastDetails.artworkUrl600} />
      </Link>
      <TitleWrapper>
        <Link to={ROUTES.PODCAST_DETAIL_WITH_PARAM(podcastId)}>
          <Typography color={Colors.gray900}>{podcastDetails.collectionName}</Typography>
        </Link>
        <Typography type={TypographyTypes.CAPTION}>by {podcastDetails.artistName}</Typography>
      </TitleWrapper>
      <DescriptionWrapper>
        <Typography color={Colors.gray900}>Description:</Typography>
        <Typography style={{ fontStyle: 'italic' }}>{description}</Typography>
      </DescriptionWrapper>
    </PodcastCardContainer>
  );
};

export default PodcastCard;
