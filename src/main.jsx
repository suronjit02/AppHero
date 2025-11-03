import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import AllApps from './pages/AllApps.jsx'
import MyInstallation from './pages/MyInstallation.jsx'
import RootLayout from './layouts/RootLayout.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    Component: RootLayout,

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


    ]
  },
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>

  </StrictMode>,
)
