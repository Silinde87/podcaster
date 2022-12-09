import CounterTag from 'components/atoms/CounterTag';
import SearchBar from 'components/atoms/SearchBar';
import HomeCard from 'components/molecules/Cards/HomeCard';
import Layout from 'components/molecules/Layout';
import { PodcastContext } from 'providers/PodcastProvider';
import { useContext, useEffect, useState } from 'react';
import { IPodcast } from 'utils/interfaces/api/podcasts.interface';
import { HomeWrapper, PodcastsContainer, SearchBarContainer } from './Home.styled';

const Home: React.FC = () => {
  const { podcasts } = useContext(PodcastContext);
  const [filteredPodcasts, setFilteredPodcasts] = useState<IPodcast[]>([] as IPodcast[]);

  useEffect(() => {
    setFilteredPodcasts(podcasts);
  }, [podcasts]);

  return (
    <Layout>
      <HomeWrapper>
        <SearchBarContainer>
          <CounterTag count={filteredPodcasts.length} style={{ marginRight: 16 }} />
          <SearchBar placeholder="Filter podcasts..." onChange={value => console.log(value)} />
        </SearchBarContainer>
        <PodcastsContainer>
          {filteredPodcasts.map(podcast => (
            <HomeCard
              imageUrl={podcast['im:image'][2].label}
              title={podcast['im:name'].label}
              author={podcast['im:artist'].label}
              onClick={() => console.log('')}
            />
          ))}
        </PodcastsContainer>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
