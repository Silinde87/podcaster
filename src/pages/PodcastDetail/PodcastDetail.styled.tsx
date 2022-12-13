import styled from 'styled-components';
import { Colors } from 'theme/Colors';

const PodcastDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 32px;
  gap: 64px;
  justify-content: center;
  max-width: 1440px;
  margin: auto;
`;

const PodcastListWrapper = styled.div`
  flex-grow: 1
`;

const PodcastListSectionContainer = styled.div`
  border: 1px solid ${Colors.gray600};
  border-radius: 4px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  margin-bottom: 24px;
`;

export { PodcastDetailWrapper, PodcastListWrapper, PodcastListSectionContainer };
