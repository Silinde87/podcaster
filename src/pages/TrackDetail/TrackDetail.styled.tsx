import styled from 'styled-components';
import { Colors } from 'theme/Colors';

const TrackDetailWrapper = styled.div`
  display: flex;
  padding: 32px;
`;

const TrackDetailSectionContainer = styled.div`
  border: 1px solid ${Colors.gray600};
  border-radius: 4px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  width: 100%;
  height: fit-content;
  margin-left: 64px;
`;

const ParsedDescriptionText = styled.div`
  color: ${Colors.gray800};
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const Audio = styled.audio`
  width: 100%;
  border-radius: 8px;
`;

export { TrackDetailWrapper, TrackDetailSectionContainer, ParsedDescriptionText, Audio };
