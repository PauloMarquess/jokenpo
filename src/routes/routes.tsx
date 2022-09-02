import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game, Home } from '../components';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
