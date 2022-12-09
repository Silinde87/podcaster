import Typography from 'components/atoms/Typography';
import styled from 'styled-components';
import { Colors } from 'theme/Colors';

const HomeCardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: -40px;
  z-index: 2;
  cursor: pointer;
`;

const HomeCardTextWrapper = styled.div`
  border: 1px solid ${Colors.gray600};
  width: 100%;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  padding: 50px 8px 16px 8px;
`;

const HomeCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
`;

const HomeCardTitle = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 8px;
`;

const HomeCardAuthor = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { HomeCardImage, HomeCardTextWrapper, HomeCardContainer, HomeCardTitle, HomeCardAuthor };
