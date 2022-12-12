import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import PodcastService from 'services/Podcast.service';
import { EStorageItems, PODCASTS_EXPIRE_INTERVAL } from 'utils/constants/storage.constants';
import Expirestorage from 'utils/functions/Expirestorage';
import { IPodcast } from 'utils/interfaces/api/podcasts.interface';

export interface IPodcastState {
  podcasts: IPodcast[];
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const PodcastContext = createContext<IPodcastState>({} as IPodcastState);

export const PodcastProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [podcasts, setPodcasts] = useState([] as IPodcast[]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    retrievePodcasts();
  }, []);

  const retrievePodcasts = async () => {
    const storageData = Expirestorage.getItem(EStorageItems.PODCASTS);
    if (storageData) {
      setPodcasts(JSON.parse(storageData));
      setLoading(false);
      return;
    }

    try {
      const response = await PodcastService.getPodcasts();
      Expirestorage.setItem(
        EStorageItems.PODCASTS,
        JSON.stringify(response.feed.entry),
        PODCASTS_EXPIRE_INTERVAL,
      );
      setPodcasts(response.feed.entry);
      setLoading(false);
    } catch (error) {
      console.error(`Podcast list not available`)
    }
  };
  const value = { podcasts, loading, setLoading };
  return <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>;
};
