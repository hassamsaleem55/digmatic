import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Topbar({ navItems }) {
  const [pageTitle, setPageTitle] = useState();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const obj = navItems.sideBar.find((item) => item["path"] === pathname) || null;
    setPageTitle(obj && obj.title);
  }, []);

  return (
    <header className="app-topbar topbar-active" id="header">
      <div className="page-container topbar-menu">
        <div className="d-flex align-items-center gap-2">
          {/* Topbar Page Title */}
          <div className="topbar-item d-none d-md-flex px-2">
            <div>
              <h4 className="page-title fs-20 fw-semibold mb-0">{pageTitle}</h4>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          {/* User Dropdown */}
          <div className="topbar-item nav-user">
            <div className="dropdown">
              <a
                className="topbar-link dropdown-toggle drop-arrow-none px-2"
                data-bs-toggle="dropdown"
                data-bs-offset="0,25"
                type="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <span className="d-lg-flex flex-column gap-1 d-none">
                  <h5 className="my-0">{`Admin`}</h5>
                </span>
                <i className="ri-arrow-down-s-line d-none d-lg-block align-middle ms-1" />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                {navItems.topBar.map((value, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/admin/${value.path}`}
                      className="dropdown-item"
                    >
                      <i className={`${value.icon} me-1 fs-16 align-middle`} />
                      <span className="align-middle">{value.title}</span>
                    </Link>
                  );
                })}

                <div className="dropdown-divider" />
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item active fw-semibold text-danger"
                >
                  <i className="ri-logout-box-line me-1 fs-16 align-middle" />
                  <span className="align-middle">{`Sign Out`}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
