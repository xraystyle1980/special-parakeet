import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Sidebar } from "./screens/Sidebar";
import { FractalHomeUserConnected } from "./screens/FractalHomeUserConnected";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Sidebar />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/fractal-home-user-connected",
    element: <FractalHomeUserConnected />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
