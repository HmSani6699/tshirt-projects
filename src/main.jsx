import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import About from './component/About/About';
import OrderReview from './component/OrderReview/OrderReview';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Grandpa from './component/Grandpa/Grandpa';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tShirts.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/review',
        element: <OrderReview></OrderReview>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
