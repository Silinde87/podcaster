import { Colors } from 'theme/Colors';
import {
  HomeCardTextWrapper,
  HomeCardImage,
  HomeCardContainer,
  HomeCardTitle,
  HomeCardAuthor,
} from './HomeCard.styled';
import { HomeCardProps } from './HomeCard.types';

const HomeCard: React.FC<HomeCardProps> = (
  { imageUrl, title, author, onClick, dataTestId = 'homecard-component' },
  props,
) => {
  return (
    <HomeCardContainer data-testid={dataTestId + '-' + title} {...props}>
      <HomeCardImage src={imageUrl} alt={title} onClick={onClick} />
      <HomeCardTextWrapper onClick={onClick}>
        <HomeCardTitle color={Colors.gray1000}>{title.toUpperCase()}</HomeCardTitle>
        <HomeCardAuthor>Author: {author}</HomeCardAuthor>
      </HomeCardTextWrapper>
    </HomeCardContainer>
  );
};

export default HomeCard;
