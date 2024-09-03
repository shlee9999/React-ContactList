import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset.css';
import 'global.css';
import HomePage from '@/pages/HomePage';
import Header from '@/components/Header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <HomePage />
  </StrictMode>
);
