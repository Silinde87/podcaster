import CounterTag from 'components/atoms/CounterTag';
import SearchBar from 'components/atoms/SearchBar';
import Layout from 'components/molecules/Layout';
import { HomeWrapper } from './Home.styled';

const Home: React.FC = () => {
  return (
    <Layout>
      <HomeWrapper>
        <CounterTag count={100} />
        <SearchBar placeholder="Filter podcasts..." onChange={value => console.log(value)} />
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
