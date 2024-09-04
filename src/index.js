import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProjects from "./Components/AllProjects";
import Footer from "./Components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all-projects",
    element: <AllProjects />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);