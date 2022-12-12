import { Route, Routes } from 'react-router-dom';
import { Home, PodcastDetail, TrackDetail } from 'pages';
import { ROUTES } from 'utils/constants/routes.constants';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PODCAST_DETAIL} element={<PodcastDetail />} />
      <Route path={ROUTES.TRACK_DETAIL} element={<TrackDetail />} />
    </Routes>
  );
}

export default App;
