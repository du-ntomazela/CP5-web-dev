import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../src/pages/Home.jsx"
import Sobre from "../src/pages/sobre.jsx"
import ErrorPage from "../src/pages/ErrorPage.jsx"
import Contato from "../src/pages/Contato.jsx"
import Projetos from "../src/pages/Projetos.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: "home",
      element: <Home />,
    },
    {
      path:"sobre",
      element: <Sobre />,
    },
    {
      path:"contato",
      element: <Contato />
    },
    {
      path:"projetos",
      element: <Projetos />
    }
  ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
 