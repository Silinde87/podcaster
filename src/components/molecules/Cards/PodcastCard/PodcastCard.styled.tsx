import styled from 'styled-components';
import { Colors } from 'theme/Colors';

const PodcastCardContainer = styled.article`
  width: 300px;
  padding: 24px;
  border: 1px solid ${Colors.gray600};
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const PodcastCardImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 24px;
`;

const TitleWrapper = styled.div`
  padding: 12px 0px;
  border-top: 1px solid ${Colors.gray600};
`;

const DescriptionWrapper = styled.div`
  padding: 12px 0px;
  border-top: 1px solid ${Colors.gray600};
`;

export { PodcastCardContainer, PodcastCardImage, TitleWrapper, DescriptionWrapper };
