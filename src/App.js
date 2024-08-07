import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./screens/RestaurantMenu";
import UserContext from "./utils/UserContext";

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
    <UserContext.Provider
      value={{ loggedInUser: userName, isLoggedIn: loggedIn }}
    >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
