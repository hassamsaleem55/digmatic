import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { loadCssFiles, loadJsFiles } from "./utilities/helpers";
import { config } from "./utilities/config";
import LandingLayout from "./landing-page/LandingLayout";

function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const firstPart = segments.length > 0 ? `/${segments[0]}` : `/`;

  let assets;
  if (firstPart === "/admin") {
    assets = config.routeAssets["/admin"];
  } else if (firstPart === "/") {
    assets = config.routeAssets["/"];
  } else {
    assets = config.routeAssets["/*"]; // catch-all
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      const title = document.createElement("title");
      title.dataset.dynamic = "true";
      title.text = firstPart === "/admin" ? "Digmatic | Admin" : "Digmatic";
      document.head.appendChild(title);
      loadCssFiles(assets?.css || []);
      loadJsFiles(assets?.js || []);
    });
  }, []);

  return (
    <>
      {firstPart === "/admin" ? (
        <Outlet />
      ) : (
        <LandingLayout>
          <Outlet />
        </LandingLayout>
      )}
    </>
  );
}

export default Layout;
