import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
{
  <script
    src="https://kit.fontawesome.com/10e58a07e8.js"
    crossorigin="anonymous"
  ></script>;
}

//  this is used to implement lazy loading in you app. here inside lazy 'import()' is not like other import it is a funtion.
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {

   const [userName, setuserName] = useState();

  useEffect(() =>{
    const data = {
      name: "Rahul Kumar",
    }
    setuserName(data.name);

  },[]);
    return(
      <Provider store={appStore}>
  <UserContext.Provider value={{LoggedInUser: userName, setuserName}}>
  <>
  <UserContext.Provider value={{LoggedInUser: "RAHUL"}}>
    <Header />
    </UserContext.Provider>

    <Outlet />
  </>
    </UserContext.Provider>
    </Provider>
    )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
