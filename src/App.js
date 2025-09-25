import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu
 from "./components/Restaurantmenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
{<script src="https://kit.fontawesome.com/10e58a07e8.js" crossorigin="anonymous"></script> }


const AppLayout = () =>(
  <>
  <Header/>
  <Outlet/>
  </>
)

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>

      },
       {
    path: "/about",
    element: <About/>
  },
  {

    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/restaurants/:resId",
    element: <Restaurantmenu />
  }
    ],
     errorElement: <Error/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);