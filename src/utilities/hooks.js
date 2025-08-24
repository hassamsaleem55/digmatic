import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadCssFiles, loadJsFiles } from "./helpers";

export function useDynamicAssets(routeAssets) {
  const { pathname } = useLocation();

  useEffect(() => {
    let assets = routeAssets[pathname];

    if (!assets) {
      const prefix = Object.keys(routeAssets).find((key) =>
        pathname.startsWith(key)
      );
      if (prefix) assets = routeAssets[prefix];
    }

    assets.css && loadCssFiles(assets.css);
    assets.js && loadJsFiles(assets.js);
    
  }, [pathname]);
}
