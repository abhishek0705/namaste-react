import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const routeError = useRouteError();
  return (
    <div>
      <Header />
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {routeError.status}: {routeError.statusText}
      </h3>
    </div>
  );
};

export default Error;
