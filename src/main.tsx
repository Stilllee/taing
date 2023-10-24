import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import '@/assets/styles/main.scss';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <HelmetProvider>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </HelmetProvider>
    </React.StrictMode>,
  );
} else {
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </HelmetProvider>
    </React.StrictMode>,
  );
}
