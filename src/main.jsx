import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Home from './pages/Main/Home';
import About from './pages/Main/About';
import Products from './pages/Main/Products';
import Dashboard from './pages/Admin/Dashboard';
import {Products as ProductsAdmin} from './pages/Admin/Products';
import Suppliers from './pages/Admin/Suppliers';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "about/",
        element: <About />,
      },
      {
        path: 'products',
        element: <Products/>,
      }
    ]
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: 'products',
        element: <ProductsAdmin/>
      },
      {
        path: 'suppliers',
        element: <Suppliers/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
