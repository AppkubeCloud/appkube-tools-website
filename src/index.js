import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Survey from "./pages/Survey";
import SurveyPage from "./templates/survey-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/survey",
    element: <SurveyPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
