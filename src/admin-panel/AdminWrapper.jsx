import Topbar from "./components/Topbar";
import SideNavbar from "./components/SideNavbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function AdminWrapper() {
  const navItems = {
    sideBar: [
      { title: "Home", path: "/admin", icon: "ri-home-8-line" },
      { title: "About", path: "/admin/about", icon: "ri-information-line" },
      { title: "Services", path: "/admin/services", icon: "ri-function-line" },
      {
        title: "Portfolio",
        path: "/admin/portfolio",
        icon: "ri-book-shelf-line",
      },
      {
        title: "Settings",
        path: "/admin/settings",
        icon: "ri-settings-2-line",
      },
    ],
    topBar: [
      { title: "My Account", path: "account", icon: "ri-account-circle-line" },
      { title: "Settings", path: "settings", icon: "ri-settings-2-line" },
    ],
  };

  return (
    <div className="wrapper">
      <SideNavbar navItems={navItems.sideBar} />
      <Topbar navItems={navItems} />
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
