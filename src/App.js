import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./screens/RestaurantMenu";
import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import { store } from "./store";

const Cart = lazy(() => import("./screens/Cart"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const data = {
      name: "Abhishek Natani",
      loggedIn: true,
    };
    setTimeout(() => {
      setUserName(data.name);
      setLoggedIn(data.loggedIn);
    }, 3000);
  }, []);
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{ loggedInUser: userName, isLoggedIn: loggedIn }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
