import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import AllPastes from "../pages/AllPaste";
import Paste from "../pages/Paste";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pastes", element: <AllPastes /> },
      { path: "/pastes/:id", element: <Paste /> },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
