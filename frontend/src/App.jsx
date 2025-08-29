import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { config } from "./utilities/config";
import Layout from "./Layout";
import LandingWrapper from "./landing-page/LandingWrapper";
import LandingNotFound from "./landing-page/LandingNotFound";
import AdminWrapper from "./admin-panel/AdminWrapper";
import Home from "./admin-panel/pages/Home";
import About from "./admin-panel/pages/About";
import Services from "./admin-panel/pages/Services";
import Portfolio from "./admin-panel/pages/Portfolio";
import Settings from "./admin-panel/pages/Settings";
import Account from "./admin-panel/pages/Account";
import AdminNotFound from "./admin-panel/AdminNotFound";

const landingImageBasePath = config.basePaths.landingAssetsBasePaths.images;
const adminImageBasePath = config.basePaths.adminAssetsBasePaths.images;
const adminRoutes = [
  { index: true, element: <Home /> },
  { path: "about", element: <About /> },
  { path: "services", element: <Services /> },
  { path: "portfolio", element: <Portfolio /> },
  { path: "settings", element: <Settings /> },
  { path: "account", element: <Account /> },
  { path: "*", element: <AdminNotFound imagePath={adminImageBasePath} /> },
];

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingWrapper imagePath={landingImageBasePath} />,
      },
      {
        path: "admin",
        element: <AdminWrapper />,
        children: adminRoutes,
      },
      {
        path: "*",
        element: <LandingNotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
