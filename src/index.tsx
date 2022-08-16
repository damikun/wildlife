import './index.css';
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Spinner from './Components/UI/Spinner';
import reportWebVitals from './reportWebVitals';
import PiwikPro from '@piwikpro/react-piwik-pro';

PiwikPro.initialize('90133965-b2d2-4f3d-acfb-0fd851e43ee9', 'container-url');

const container = document.getElementById('root');

const root = createRoot(container!);

const App = lazy(
  () =>
    import(
      /* webpackChunkName: "App" */ "../src/App"
    )
);

root.render(
  <Suspense fallback={<div className='w-screen h-screen'><Spinner/></div>}>
    <App />
  </Suspense>
);

reportWebVitals();