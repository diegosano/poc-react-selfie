import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Example1 } from './components/Example1';
import { Example2 } from './components/Example2';
import { Example3 } from './components/Example3';
import { Example4 } from './components/Example4';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example1 />,
  },
  {
    path: '/example2',
    element: <Example2 />,
  },
  {
    path: '/example3',
    element: <Example3 />,
  },
  {
    path: '/example4',
    element: <Example4 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
