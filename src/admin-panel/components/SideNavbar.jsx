import { Link, useLocation } from "react-router-dom";

function SideNavbar({ navItems }) {
  const location = useLocation();
  const pathname = location.pathname;

  // const navItems = [
  //   { title: "Home", icon: "ri-home-8-line", path: "/admin" },
  //   { title: "About", icon: "ri-information-line", path: "/admin/about" },
  //   { title: "Services", icon: "ri-function-line", path: "/admin/services" },
  //   {
  //     title: "Portfolio",
  //     icon: "ri-book-shelf-line",
  //     path: "/admin/portfolio",
  //   },
  //   { title: "Settings", icon: "ri-settings-2-line", path: "/admin/settings" },
  // ];

  return (
    <div className="sidenav-menu">
      <Link to="/admin">
        <h2 className="page-title" style={{ padding: "30px" }}>{`Digmatic`}</h2>
      </Link>
      <div data-simplebar="init" className="simplebar-scrollable-y">
        <ul className="side-nav">
          {navItems.map((item, index) => {
            // Special case: only mark Home active if it's exactly "/admin"
            const isActive =
              item.path === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.path);

            return (
              <li
                key={index}
                className={`side-nav-item ${isActive ? "active" : ""}`}
              >
                <Link to={item.path} className="side-nav-link">
                  <span className="menu-icon">
                    <i className={item.icon} />
                  </span>
                  <span className="menu-text">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
