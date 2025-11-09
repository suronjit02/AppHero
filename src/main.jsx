import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import AllApps from './pages/AllApps.jsx'
import MyInstallation from './pages/MyInstallation.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import AppDetails from './pages/AppDetails.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Loader from './components/Loader.jsx'

const router = createBrowserRouter([

  {
    id: "apps",
    path: '/',
    Component: RootLayout,
    hydrateFallbackElement: <Loader />,
    loader: async () => {
      const res = await fetch("/apps.json");
      return res.json();
    },

    children: [

      {
        path: '/',
        Component: Home,
        loader: () => fetch("/apps.json")
      },
      {
        path: '/home',
        Component: Home,
        loader: () => fetch("/apps.json")
      },
      {
        path: '/apps', 
        Component: AllApps,
        loader: () => fetch("/apps.json")
      },
      {
        path: '/installation',
        Component: MyInstallation,
        loader: () => fetch("/apps.json")
      },
      {
        path: '/app/:id',
        Component: AppDetails,
        loader: () => fetch("/apps.json")
      },
      {
        path: "*",
        Component: PageNotFound,
      },

    ]
  },

])

createRoot(document.getElementById('root')).render(
    <StrictMode>

      <RouterProvider router={router} />

    </StrictMode>
);
