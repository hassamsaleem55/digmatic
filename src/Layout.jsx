import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { loadCssFiles, loadJsFiles } from "./utilities/helpers";
import { config } from "./utilities/config";

function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const firstPart = segments.length > 0 ? `/${segments[0]}` : `/`;
  const assets = config.routeAssets[firstPart] || { css: [], js: [] };

  useEffect(() => {
    requestAnimationFrame(() => {
      const title = document.createElement("title");
      title.dataset.dynamic = "true";
      title.text = firstPart === "/" ? "Digmatic" : "Digmatic | Admin";
      document.head.appendChild(title);
      loadCssFiles(assets.css);
      loadJsFiles(assets.js);
    });
  }, []);

  return <Outlet />;
}

export default Layout;
