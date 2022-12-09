import { useContext, useEffect, useState } from 'react';
import { PodcastContext } from 'providers/PodcastProvider';
import { useNavigate } from 'react-router-dom';
import CounterTag from 'components/atoms/CounterTag';
import SearchBar from 'components/atoms/SearchBar';
import HomeCard from 'components/molecules/Cards/HomeCard';
import Layout from 'components/molecules/Layout';
import { IPodcast } from 'utils/interfaces/api/podcasts.interface';
import { HomeWrapper, PodcastsContainer, SearchBarContainer } from './Home.styled';
import { ROUTES } from 'utils/constants/routes.constants';

const Home: React.FC = () => {
  const { podcasts } = useContext(PodcastContext);
  const [filteredPodcasts, setFilteredPodcasts] = useState<IPodcast[]>([] as IPodcast[]);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredPodcasts(podcasts);
  }, [podcasts]);

  const handleOnChangeSearchBar = (value: string) => {
    const loweredCaseValue = value.toLowerCase();
    const _podcasts = podcasts.filter(
      podcast =>
        podcast['im:name'].label.toLowerCase().includes(loweredCaseValue) ||
        podcast['im:artist'].label.toLowerCase().includes(loweredCaseValue),
    );
    setFilteredPodcasts(_podcasts);
  };

  return (
    <Layout>
      <HomeWrapper>
        <SearchBarContainer>
          <CounterTag count={filteredPodcasts.length} style={{ marginRight: 16 }} />
          <SearchBar placeholder="Filter podcasts..." onChange={handleOnChangeSearchBar} />
        </SearchBarContainer>
        <PodcastsContainer>
          {filteredPodcasts.map(podcast => (
            <HomeCard
              imageUrl={podcast['im:image'][2].label}
              title={podcast['im:name'].label}
              author={podcast['im:artist'].label}
              onClick={() =>
                navigate(ROUTES.PODCAST_DETAIL_WITH_PARAM(podcast.id.attributes['im:id']))
              }
            />
          ))}
        </PodcastsContainer>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
