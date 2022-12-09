import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  width: fit-content;
  align-self: flex-end;
`;

const PodcastsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px;
`;

export { HomeWrapper, SearchBarContainer, PodcastsContainer };
