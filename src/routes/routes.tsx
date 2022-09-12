import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from '../components';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
