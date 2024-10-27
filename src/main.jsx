import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots';
import Home from './components/Home/Home';
import Fixture from './components/Fixture/Fixture';
import Teams from './components/Teams/Teams';
import Schedules from './components/Schedules/Schedules';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/fixture',
        element: <Fixture />,
        loader: () => fetch('player.json')
      },
      {
        path: '/teams',
        element: <Teams />
      },
      {
        path: '/schedules',
        element: <Schedules />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>,
);
