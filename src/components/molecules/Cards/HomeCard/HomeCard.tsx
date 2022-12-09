import Typography, { TypographyTypes } from 'components/atoms/Typography';
import React from 'react';
import { Colors } from 'theme/Colors';
import {
  HomeCardTextWrapper,
  HomeCardImage,
  HomeCardContainer,
  HomeCardTitle,
} from './HomeCard.styled';
import { HomeCardProps } from './HomeCard.types';

const HomeCard: React.FC<HomeCardProps> = ({ imageUrl, title, author, onClick }) => {
  return (
    <HomeCardContainer>
      <HomeCardImage src={imageUrl} alt={title} onClick={onClick} />
      <HomeCardTextWrapper onClick={onClick}>
        <HomeCardTitle color={Colors.gray1000}>{title.toUpperCase()}</HomeCardTitle>
        <Typography>Author: {author}</Typography>
      </HomeCardTextWrapper>
    </HomeCardContainer>
  );
};

export default HomeCard;
