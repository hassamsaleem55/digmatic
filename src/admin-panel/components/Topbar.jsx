function Topbar({ imagePath }) {
  return (
    <header className="app-topbar" id="header">
      <div className="page-container topbar-menu">
        <div className="d-flex align-items-center gap-2">
          {/* Brand Logo */}
          <a href="index.html" className="logo">
            <span className="logo-light">
              <span className="logo-lg">
                <img src={`${imagePath}/logo.png`} alt="logo" />
              </span>
              <span className="logo-sm">
                <img src={`${imagePath}/logo-sm.png`} alt="small logo" />
              </span>
            </span>
            <span className="logo-dark">
              <span className="logo-lg">
                <img src={`${imagePath}/logo-dark.png`} alt="dark logo" />
              </span>
              <span className="logo-sm">
                <img src={`${imagePath}/logo-sm.png`} alt="small logo" />
              </span>
            </span>
          </a>
          {/* Sidebar Menu Toggle Button */}
          <button className="sidenav-toggle-button px-2">
            <i className="ri-menu-5-line fs-24" />
          </button>
          {/* Horizontal Menu Toggle Button */}
          <button
            className="topnav-toggle-button px-2"
            data-bs-toggle="collapse"
            data-bs-target="#topnav-menu-content"
          >
            <i className="ri-menu-5-line fs-24" />
          </button>
          {/* Topbar Page Title */}
          <div className="topbar-item d-none d-md-flex px-2">
            <div>
              <h4 className="page-title fs-20 fw-semibold mb-0">Dashboard</h4>
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
                  <h5 className="my-0">Admin</h5>
                </span>
                <i className="ri-arrow-down-s-line d-none d-lg-block align-middle ms-1" />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="ri-account-circle-line me-1 fs-16 align-middle" />
                  <span className="align-middle">My Account</span>
                </a>
                {/* item*/}
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="ri-wallet-3-line me-1 fs-16 align-middle" />
                  <span className="align-middle">
                    Wallet : <span className="fw-semibold">$89.25k</span>
                  </span>
                </a>
                {/* item*/}
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="ri-settings-2-line me-1 fs-16 align-middle" />
                  <span className="align-middle">Settings</span>
                </a>
                {/* item*/}
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="ri-question-line me-1 fs-16 align-middle" />
                  <span className="align-middle">Support</span>
                </a>
                <div className="dropdown-divider" />
                {/* item*/}
                <a href="javascript:void(0);" className="dropdown-item">
                  <i className="ri-lock-line me-1 fs-16 align-middle" />
                  <span className="align-middle">Lock Screen</span>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item active fw-semibold text-danger"
                >
                  <i className="ri-logout-box-line me-1 fs-16 align-middle" />
                  <span className="align-middle">Sign Out</span>
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
