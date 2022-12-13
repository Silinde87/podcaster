import styled from 'styled-components';
import { Breakpoints } from 'theme/Breakpoints';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 1440px;
  margin: auto;
`;

const SearchBarContainer = styled.div`
  display: flex;
  width: fit-content;
  align-self: flex-end;
  width: 400px;
  @media (max-width: ${Breakpoints.sm}px) {
    width: 100%;
  }
`;

const PodcastsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 72px;
  margin-top: 32px;
`;

export { HomeWrapper, SearchBarContainer, PodcastsContainer };
