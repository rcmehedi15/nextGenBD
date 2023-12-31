import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Statistics from './components/Statistics';
import Home from './components/Home';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
// import Jobdetails from './components/Jobdetails';
import Jobapply from './components/Jobapply';
import EachJob from './components/EachJob';
import Appliedjobs from './components/Appliedjobs';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: () => fetch('jobs.json')
      },

      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/appliedjobs',
        element: <Appliedjobs />
      },
      
      {
        path: '/jobdetails/:jobId',
        element: <EachJob />,
        loader: () => fetch('jobs.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
