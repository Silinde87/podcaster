import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PodcastService from 'services/Podcast.service';
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from 'utils/constants/storage.constants';
import Expirestorage from 'utils/functions/Expirestorage';
import { IPodcastDetail } from 'utils/interfaces/api/podcast_details.interface';

import { PodcastCardContainer } from './PodcastCard.styled';
import { PodcastCardProps } from './PodcastCard.types';

const PodcastCard: React.FC<PodcastCardProps> = () => {
  const { podcastId } = useParams();
  const [podcastDetails, setPodcastDetails] = useState<IPodcastDetail>();

  useEffect(() => {
    const _getPodcastDetails = async (_podcastId: string) => {
      const storageData = Expirestorage.getItem(EStorageItems.PODCAST_DETAILS + podcastId);
      if (storageData) {
        setPodcastDetails(JSON.parse(storageData));
        return;
      }
      try {
        const response = await PodcastService.getPodcastDetails(_podcastId);
        if (response.resultCount > 0) {
          Expirestorage.setItem(
            EStorageItems.PODCAST_DETAILS + _podcastId,
            JSON.stringify(response.results[0]),
            PODCASTS_EXPIRE_INTERVAL,
          );
          setPodcastDetails(response.results[0]);
        }
      } catch (error) {}
    };
    podcastId && _getPodcastDetails(podcastId);
  }, [podcastId]);

  return <PodcastCardContainer>{podcastDetails?.artistName}</PodcastCardContainer>;
};

export default PodcastCard;
