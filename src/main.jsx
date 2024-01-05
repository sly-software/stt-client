import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./exp-compnts/jsx/Home.jsx";
import ErrorPage from "./exp-compnts/jsx/ErrorPage.jsx";
import CurrentChemicalsTable from "./exp-compnts/jsx/CurrentChemicalsTable.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import Login from "./exp-compnts/jsx/Login.jsx";
import Register from "./exp-compnts/jsx/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "stocked/chemicals",
        element: <CurrentChemicalsTable />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
