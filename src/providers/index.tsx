import React, { PropsWithChildren } from 'react';
import { PodcastProvider } from './PodcastProvider';

const compose = (providers: React.FC<PropsWithChildren<{}>>[]) =>
  providers.reduce(
    (Previous: React.FC<PropsWithChildren<{}>>, Current: React.FC<PropsWithChildren<{}>>) =>
      ({ children }) =>
        (
          <Previous>
            <Current>{children}</Current>
          </Previous>
        ),
  );

const Provider = compose([PodcastProvider]);

export default Provider;
