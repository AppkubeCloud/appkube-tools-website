import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Survey from "./pages/Survey";
import SurveyPage from "./templates/survey-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SurveyPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
