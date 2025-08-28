import { Link, useLocation } from "react-router-dom";

function SideNavbar({ navItems, pageTitle, setPageTitle }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="sidenav-menu">
      <Link to="/admin" onClick={() => setPageTitle("Home")}>
        <h2 className="page-title" style={{ padding: "30px" }}>{`Digmatic`}</h2>
      </Link>
      <div data-simplebar="init" className="simplebar-scrollable-y">
        <ul className="side-nav">
          {navItems.map((value, index) => {
            return (
              <li
                key={index}
                className={`side-nav-item ${
                  value.title === pageTitle ? "active" : ""
                }`}
              >
                <Link
                  to={`/admin${value.path}`}
                  className="side-nav-link"
                  onClick={() => setPageTitle(value.title)}
                >
                  <span className="menu-icon">
                    <i className={value.icon} />
                  </span>
                  <span className="menu-text">{value.title}</span>
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
