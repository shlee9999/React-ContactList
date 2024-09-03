import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset.css';
import 'global.css';
import HomePage from '@/pages/HomePage';
import Header from '@/components/Header';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <Header />
      <HomePage />
    </RecoilRoot>
  </StrictMode>
);
