import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/pages/Home/Home.jsx';
import Blog from './Components/pages/Blog/Blog.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/pages/Error/ErrorPage.jsx';
import ChefRecipes from './Components/pages/ChefRecipes/ChefRecipes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/chefrecipes',
        element: <ChefRecipes></ChefRecipes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
