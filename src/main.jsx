import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import AllApps from './pages/AllApps.jsx'
import MyInstallation from './pages/MyInstallation.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import AppDetails from './pages/AppDetails.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    Component: RootLayout,
    loader: async () => {
      const res = await fetch("/apps.json");
      return res.json();
    },

    children: [

      {
        path: '/',
        Component: Home,
      },
      {
        path: '/home',
        Component: Home,
      },
      {
        path: '/apps',
        Component: AllApps,
      },
      {
        path: '/installation',
        Component: MyInstallation,
      },
      {
        path: '/app/:id',
        Component: AppDetails,
      },
      {
        path: "*",
        Component: NotFound,
      },

    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </StrictMode>,
)
