import styled from 'styled-components';
import { Colors } from 'theme/Colors';

const PodcastDetailWrapper = styled.div`
  display: flex;
  padding: 32px;
`;

const PodcastListWrapper = styled.div`
  margin-left: 64px;
  width: 100%;
`;
const PodcastListHeader = styled.div`
  border: 1px solid ${Colors.gray600};
  border-radius: 4px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
`;

export { PodcastDetailWrapper, PodcastListWrapper, PodcastListHeader };
