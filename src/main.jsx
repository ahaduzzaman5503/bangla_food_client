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
import Login from './Components/InOutAuth/Login/Login.jsx';
import Register from './Components/InOutAuth/Register/Register.jsx';
import About from './Components/pages/About/About.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './Providers/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("https://bd-cuisine-server-ahaduzzaman5503.vercel.app/chefs")
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/chefrecipes/:id',
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({params}) => fetch(`https://bd-cuisine-server-ahaduzzaman5503.vercel.app/chefs/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
