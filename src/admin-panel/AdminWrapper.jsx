import Topbar from "./components/Topbar";
import SideNavbar from "./components/SideNavbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function AdminWrapper() {
  return (
    <div className="wrapper">
      <SideNavbar />
      <Topbar />
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
