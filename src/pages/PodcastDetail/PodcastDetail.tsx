import PodcastCard from 'components/molecules/Cards/PodcastCard';
import Layout from 'components/molecules/Layout';
import React from 'react';
import { PodcastDetailWrapper } from './PodcastDetail.styled';

const PodcastDetail = () => {
  return (
    <Layout>
      <PodcastDetailWrapper>
        <PodcastCard />
      </PodcastDetailWrapper>
    </Layout>
  );
};

export default PodcastDetail;
