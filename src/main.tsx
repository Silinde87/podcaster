import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyles from 'theme/GlobalStyles';
import Provider from 'providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
);
