import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './outlet/Layout.jsx'
import Home from './Component/Home.jsx'



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path: "/",
          element : <Home/>
        },
        {
          path:"/"
        }
      ]
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router= {router}/>
  </StrictMode>,
)
