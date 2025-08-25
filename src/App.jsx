import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { loadCssFiles, loadJsFiles } from "./utilities/helpers";
import { config } from "./utilities/config";
import LandingMain from "./landing-page/LandingMain";
import Dashboard from "./admin-panel/Dashboard";

const landingImagesPath = config.basePaths.landingAssets.images;
const landingCssPath = config.basePaths.landingAssets.css;
const landingJsPath = config.basePaths.landingAssets.js;

const routeAssets = {
  "/": {
    css: [
      {
        link: `${landingImagesPath}/favicon.ico`,
        rel: "shortcut icon",
      },
      { link: `${landingCssPath}/master.css`, rel: "stylesheet" },
      { link: `${landingCssPath}/responsive.css`, rel: "stylesheet" },
    ],
    js: [
      `${landingJsPath}/jquery.min.js`,
      `${landingJsPath}/plugins.js`,
      `${landingJsPath}/master.js`,
    ],
  },
  "/admin": {
    css: [],
    js: [],
  },
};

const Layout = () => {
  const location = useLocation();
  const assets = routeAssets[location.pathname] || { css: [], js: [] };

  useEffect(() => {
    requestAnimationFrame(() => {
      loadCssFiles(assets.css);
      loadJsFiles(assets.js);
    });
  }, []);

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <LandingMain /> },
      { path: "/admin", element: <Dashboard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
