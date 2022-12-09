import { Route, Routes } from 'react-router-dom';
import { Home, PodcastDetail } from 'pages';
import { ROUTES } from 'utils/constants/routes.constants';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PODCAST_DETAIL} element={<PodcastDetail />} />
    </Routes>
  );
}

export default App;
