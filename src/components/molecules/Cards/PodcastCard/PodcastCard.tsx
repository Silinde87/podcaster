import { useContext, useEffect, useState } from 'react';
import { PodcastContext } from 'providers/PodcastProvider';
import { Colors } from 'theme/Colors';
import {
  DescriptionWrapper,
  PodcastCardContainer,
  PodcastCardImage,
  TitleWrapper,
} from './PodcastCard.styled';
import Typography, { TypographyTypes } from 'components/atoms/Typography';
import { PodcastCardProps } from './PodcastCard.types';

const PodcastCard: React.FC<PodcastCardProps> = ({ podcastDetails }) => {
  const { podcasts } = useContext(PodcastContext);
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    const podcast = podcasts.find(
      podcast => podcast.id.attributes['im:id'] === podcastDetails.collectionId.toString(),
    );
    if (podcast) {
      setDescription(podcast.summary.label);
    }
  }, [podcasts]);

  return (
    <PodcastCardContainer>
      <PodcastCardImage src={podcastDetails.artworkUrl600} />
      <TitleWrapper>
        <Typography color={Colors.gray900}>{podcastDetails.collectionName}</Typography>
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
