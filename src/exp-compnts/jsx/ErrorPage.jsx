import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "../css/ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={`/`}>
        <button className="return-home">HOME</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
