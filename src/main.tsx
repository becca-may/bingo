import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HvkBingo from './components/HvkBingo';
import StrataBingo from './components/StrataBingo';
import { HashRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/bingo">
      <Routes>
        <Route path="/hvk" element={<HvkBingo />} />
        <Route path="/strata" element={<StrataBingo />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
