
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from './AdminRoute';

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'menu',
            element:<Menu></Menu>

        },
        {
            path:'order/:category',
            element:<Order></Order>

        },
        {
            path:'contact',
            element:<ContactUs></ContactUs>

        },
        {
            path:'login',
            element:<Login></Login>

        },
        {
            path:'signup',
            element:<SignUp></SignUp>

        },
        {
          path:'secrete',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // normal user
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // admin route
        {
          path:'addItems',
          element:<AddItems></AddItems>
        }
        ,
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },

      ]
    }
  ]);