import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useDynamicAssets } from "./utilities/hooks";
import { config } from "./utilities/config";
import LandingPage from "./landing-page/main";
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
      `${landingJsPath}/validator.js`,
      `${landingJsPath}/plugins.js`,
      `${landingJsPath}/master.js`,
      `${landingJsPath}/bootsnav.js`,
    ],
  },
  "/admin": {
    css: [],
    js: [],
  },
};

const Layout = () => {
  useDynamicAssets(routeAssets);
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/admin", element: <Dashboard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
