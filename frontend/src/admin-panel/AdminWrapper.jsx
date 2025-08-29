import { useState, useEffect } from "react";
import Topbar from "./components/Topbar";
import SideNavbar from "./components/SideNavbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AdminWrapper() {
  const [pageTitle, setPageTitle] = useState();
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = {
    sideBar: [
      { title: "Home / Banner", path: "", icon: "ri-home-8-line" },
      { title: "About", path: "/about", icon: "ri-information-line" },
      { title: "Services", path: "/services", icon: "ri-function-line" },
      {
        title: "Portfolio",
        path: "/portfolio",
        icon: "ri-book-shelf-line",
      },
      {
        title: "Settings",
        path: "/settings",
        icon: "ri-settings-2-line",
      },
    ],
    topBar: [
      { title: "My Account", path: "/account", icon: "ri-account-circle-line" },
      { title: "Settings", path: "/settings", icon: "ri-settings-2-line" },
    ],
  };

  useEffect(() => {
    const pathPrefix = "/admin";
    let obj =
      navItems.sideBar.find((item) => pathPrefix + item["path"] === pathname) ||
      null;

    obj === null &&
      (obj =
        navItems.topBar.find(
          (item) => pathPrefix + item["path"] === pathname
        ) || null);

    setPageTitle(obj && obj.title);
  }, []);

  return (
    <div className="wrapper">
      <SideNavbar
        navItems={navItems.sideBar}
        pageTitle={pageTitle}
        setPageTitle={setPageTitle}
      />
      <Topbar
        navItems={navItems.topBar}
        pageTitle={pageTitle}
        setPageTitle={setPageTitle}
      />
      <div className="page-content">
        <div className="page-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminWrapper;
