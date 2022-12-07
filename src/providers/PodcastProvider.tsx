import { createContext, FC, PropsWithChildren, useState } from 'react';

export interface IPodcastState {
  podcasts: string[];
}

export const PodcastContext = createContext<IPodcastState>({} as IPodcastState);

export const PodcastProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [podcasts, setPodcasts] = useState(['test']);
  const value = { podcasts };
  return <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>;
};
