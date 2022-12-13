import styled from 'styled-components';
import { Breakpoints } from 'theme/Breakpoints';
import { Colors } from 'theme/Colors';

const TrackDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 32px;
  gap: 64px;
  max-width: 1440px;
  margin: auto;
  @media (max-width: ${Breakpoints.md}px) {
    flex-wrap: wrap;
  }
`;

const TrackDetailSectionContainer = styled.div`
  border: 1px solid ${Colors.gray600};
  border-radius: 4px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  padding: 24px;
  height: fit-content;
`;

const ParsedDescriptionText = styled.div`
  color: ${Colors.gray800};
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const Audio = styled.audio`
  border-radius: 8px;
  width: 100%;
`;

export { TrackDetailWrapper, TrackDetailSectionContainer, ParsedDescriptionText, Audio };
