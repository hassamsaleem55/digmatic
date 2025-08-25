import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { config } from "./utilities/config";
import Layout from "./Layout";
import LandingMain from "./landing-page/LandingMain";
import Dashboard from "./admin-panel/Dashboard";

const landingImageBasePath = config.basePaths.landingAssets.images;
const adminImageBasePath = config.basePaths.adminAssets.images;
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingMain imagePath={landingImageBasePath} />,
      },
      {
        path: "/admin",
        element: <Dashboard imagePath={adminImageBasePath} />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
