import { Home } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes.constants';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}

export default App;
