import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset.css';
import 'global.css';
import HomePage from '@/pages/HomePage';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <HomePage />
    </RecoilRoot>
  </StrictMode>
);
