import './index.css';
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Spinner from './Components/UI/Spinner';
import reportWebVitals from './reportWebVitals';

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