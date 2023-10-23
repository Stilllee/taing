import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import '@/assets/styles/main.scss';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>,
);
