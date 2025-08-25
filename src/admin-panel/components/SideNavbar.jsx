function SideNavbar({ imagePath }) {
  return (
    <div>
      <div className="sidenav-menu">
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
        {/* Sidebar Hover Menu Toggle Button */}
        <button className="button-sm-hover">
          <i className="ri-circle-line align-middle" />
        </button>
        {/* Sidebar Menu Toggle Button */}
        <button className="sidenav-toggle-button">
          <i className="ri-menu-5-line fs-20" />
        </button>
        {/* Full Sidebar Menu Close Button */}
        <button className="button-close-fullsidebar">
          <i className="ti ti-x align-middle" />
        </button>
        <div data-simplebar="">
          {/* User */}
          <div className="sidenav-user">
            <div className="dropdown-center text-center">
              <a
                className="topbar-link dropdown-toggle text-reset drop-arrow-none px-2"
                data-bs-toggle="dropdown"
                type="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src={`${imagePath}/users/avatar-1.jpg`}
                  width={46}
                  className="rounded-circle"
                  alt="user-image"
                />
                <span className="d-flex gap-1 sidenav-user-name my-2">
                  <span>
                    <span className="mb-0 fw-semibold lh-base fs-15">
                      Nowak Helme
                    </span>
                    <p className="my-0 fs-13 text-muted">Admin Head</p>
                  </span>
                  <i className="ri-arrow-down-s-line d-block sidenav-user-arrow align-middle" />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>
                {/* item*/}
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
          {/*- Sidenav Menu */}
          <ul className="side-nav">
            <li className="side-nav-item">
              <a href="index.html" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-dashboard" />
                </span>
                <span className="menu-text"> Dashboard </span>
                <span className="badge bg-danger rounded-pill">9+</span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="apps-chat.html" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-message" />
                </span>
                <span className="menu-text"> Chat </span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="apps-calendar.html" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-calendar" />
                </span>
                <span className="menu-text"> Calendar </span>
              </a>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarContacts"
                aria-expanded="false"
                aria-controls="sidebarContacts"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-user-square-rounded" />
                </span>
                <span className="menu-text"> Users</span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarContacts">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="apps-user-contacts.html" className="side-nav-link">
                      <span className="menu-text">Contacts</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="apps-user-profile.html" className="side-nav-link">
                      <span className="menu-text">Profile</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a href="apps-email.html" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-mailbox" />
                </span>
                <span className="menu-text"> Email </span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="apps-file-manager.html" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-folders" />
                </span>
                <span className="menu-text"> File Manager </span>
              </a>
            </li>
            <li className="side-nav-item">
              <a href="apps-projects.html" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-briefcase" />
                </span>
                <span className="menu-text"> Projects </span>
              </a>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarTasks"
                aria-expanded="false"
                aria-controls="sidebarTasks"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-layout-kanban" />
                </span>
                <span className="menu-text"> Tasks</span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarTasks">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="apps-kanban.html" className="side-nav-link">
                      <span className="menu-text">Kanban</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="apps-task-details.html" className="side-nav-link">
                      <span className="menu-text">View Details</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarInvoice"
                aria-expanded="false"
                aria-controls="sidebarInvoice"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-invoice" />
                </span>
                <span className="menu-text"> Invoice</span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarInvoice">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="apps-invoices.html" className="side-nav-link">
                      <span className="menu-text">Invoices</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="apps-invoice-details.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">View Invoice</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="apps-invoice-create.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Create Invoice</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-title mt-2">Custom</li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarPages"
                aria-expanded="false"
                aria-controls="sidebarPages"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-package" />
                </span>
                <span className="menu-text"> Pages </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarPages">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="pages-starter.html" className="side-nav-link">
                      <span className="menu-text">Starter Page</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="pages-pricing.html" className="side-nav-link">
                      <span className="menu-text">Pricing</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="pages-faq.html" className="side-nav-link">
                      <span className="menu-text">FAQ</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="pages-maintenance.html" className="side-nav-link">
                      <span className="menu-text">Maintenance</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="pages-timeline.html" className="side-nav-link">
                      <span className="menu-text">Timeline</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="pages-coming-soon.html" className="side-nav-link">
                      <span className="menu-text">Coming Soon</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarPagesAuth"
                aria-expanded="false"
                aria-controls="sidebarPagesAuth"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-user-shield" />
                </span>
                <span className="menu-text"> Authentication </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarPagesAuth">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="auth-login.html" className="side-nav-link">
                      <span className="menu-text">Login</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="auth-register.html" className="side-nav-link">
                      <span className="menu-text">Register</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="auth-logout.html" className="side-nav-link">
                      <span className="menu-text">Logout</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="auth-recoverpw.html" className="side-nav-link">
                      <span className="menu-text">Recover Password</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="auth-createpw.html" className="side-nav-link">
                      <span className="menu-text">Create Password</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="auth-lock-screen.html" className="side-nav-link">
                      <span className="menu-text">Lock Screen</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="auth-confirm-mail.html" className="side-nav-link">
                      <span className="menu-text">Confirm Mail</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="auth-login-pin.html" className="side-nav-link">
                      <span className="menu-text">Login with PIN</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarPagesError"
                aria-expanded="false"
                aria-controls="sidebarPagesError"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-exclamation-circle" />
                </span>
                <span className="menu-text"> Error Pages </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarPagesError">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="error-401.html" className="side-nav-link">
                      <span className="menu-text">401 Unauthorized</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="error-400.html" className="side-nav-link">
                      <span className="menu-text">400 Bad Request</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="error-403.html" className="side-nav-link">
                      <span className="menu-text">403 Forbidden</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="error-404.html" className="side-nav-link">
                      <span className="menu-text">404 Not Found</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="error-500.html" className="side-nav-link">
                      <span className="menu-text">500 Internal Server</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="error-service-unavailable.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Service Unavailable</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="error-404-alt.html" className="side-nav-link">
                      <span className="menu-text">Error 404 Alt</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a href="widgets.html" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-layout-dashboard" />
                </span>
                <span className="menu-text"> Widgets </span>
              </a>
            </li>
            <li className="side-nav-title mt-2">Components</li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarBaseUI"
                aria-expanded="false"
                aria-controls="sidebarBaseUI"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-aperture" />
                </span>
                <span className="menu-text"> Base UI </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarBaseUI">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="ui-accordions.html" className="side-nav-link">
                      <span className="menu-text">Accordions</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-alerts.html" className="side-nav-link">
                      <span className="menu-text">Alerts</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-avatars.html" className="side-nav-link">
                      <span className="menu-text">Avatars</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-badges.html" className="side-nav-link">
                      <span className="menu-text">Badges</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-breadcrumb.html" className="side-nav-link">
                      <span className="menu-text">Breadcrumb</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-buttons.html" className="side-nav-link">
                      <span className="menu-text">Buttons</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-cards.html" className="side-nav-link">
                      <span className="menu-text">Cards</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-carousel.html" className="side-nav-link">
                      <span className="menu-text">Carousel</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-collapse.html" className="side-nav-link">
                      <span className="menu-text">Collapse</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-dropdowns.html" className="side-nav-link">
                      <span className="menu-text">Dropdowns</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-ratios.html" className="side-nav-link">
                      <span className="menu-text">Ratios</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-grid.html" className="side-nav-link">
                      <span className="menu-text">Grid</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-links.html" className="side-nav-link">
                      <span className="menu-text">Links</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-list-group.html" className="side-nav-link">
                      <span className="menu-text">List Group</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-modals.html" className="side-nav-link">
                      <span className="menu-text">Modals</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-notifications.html" className="side-nav-link">
                      <span className="menu-text">Notifications</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-offcanvas.html" className="side-nav-link">
                      <span className="menu-text">Offcanvas</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-placeholders.html" className="side-nav-link">
                      <span className="menu-text">Placeholders</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-pagination.html" className="side-nav-link">
                      <span className="menu-text">Pagination</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-popovers.html" className="side-nav-link">
                      <span className="menu-text">Popovers</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-progress.html" className="side-nav-link">
                      <span className="menu-text">Progress</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-scrollspy.html" className="side-nav-link">
                      <span className="menu-text">Scrollspy</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-spinners.html" className="side-nav-link">
                      <span className="menu-text">Spinners</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-tabs.html" className="side-nav-link">
                      <span className="menu-text">Tabs</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-tooltips.html" className="side-nav-link">
                      <span className="menu-text">Tooltips</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-typography.html" className="side-nav-link">
                      <span className="menu-text">Typography</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-utilities.html" className="side-nav-link">
                      <span className="menu-text">Utilities</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarExtendedUI"
                aria-expanded="false"
                aria-controls="sidebarExtendedUI"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-macro" />
                </span>
                <span className="menu-text"> Extended UI </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarExtendedUI">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="extended-dragula.html" className="side-nav-link">
                      <span className="menu-text">Dragula</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="extended-sweetalerts.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Sweet Alerts</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="extended-ratings.html" className="side-nav-link">
                      <span className="menu-text">Ratings</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="extended-scrollbar.html" className="side-nav-link">
                      <span className="menu-text">Scrollbar</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarIcons"
                aria-expanded="false"
                aria-controls="sidebarIcons"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-icons" />
                </span>
                <span className="menu-text"> Icons </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarIcons">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="icons-remix.html" className="side-nav-link">
                      <span className="menu-text">Remix</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="icons-tabler.html" className="side-nav-link">
                      <span className="menu-text">Tabler</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="icons-solar.html" className="side-nav-link">
                      <span className="menu-text">Solar</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarCharts"
                aria-expanded="false"
                aria-controls="sidebarCharts"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-chart-infographic" />
                </span>
                <span className="menu-text"> Charts </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarCharts">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="charts-apex-area.html" className="side-nav-link">
                      <span className="menu-text">Area</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-bar.html" className="side-nav-link">
                      <span className="menu-text">Bar</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-bubble.html" className="side-nav-link">
                      <span className="menu-text">Bubble</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-candlestick.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Candlestick</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-column.html" className="side-nav-link">
                      <span className="menu-text">Column</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-heatmap.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Heatmap</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-line.html" className="side-nav-link">
                      <span className="menu-text">Line</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-mixed.html" className="side-nav-link">
                      <span className="menu-text">Mixed</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-timeline.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Timeline</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-boxplot.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Boxplot</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-treemap.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Treemap</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-pie.html" className="side-nav-link">
                      <span className="menu-text">Pie</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-radar.html" className="side-nav-link">
                      <span className="menu-text">Radar</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-radialbar.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">RadialBar</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-scatter.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Scatter</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-polar-area.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Polar Area</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-sparklines.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Sparklines</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-slope.html" className="side-nav-link">
                      <span className="menu-text">Slope</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-funnel.html" className="side-nav-link">
                      <span className="menu-text">Funnel</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarForms"
                aria-expanded="false"
                aria-controls="sidebarForms"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-list-details" />
                </span>
                <span className="menu-text"> Forms </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarForms">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="form-elements.html" className="side-nav-link">
                      <span className="menu-text">Basic Elements</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-inputmask.html" className="side-nav-link">
                      <span className="menu-text">Inputmask</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-picker.html" className="side-nav-link">
                      <span className="menu-text">Picker</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-select.html" className="side-nav-link">
                      <span className="menu-text">Select</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-range-slider.html" className="side-nav-link">
                      <span className="menu-text">Range Slider</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-validation.html" className="side-nav-link">
                      <span className="menu-text">Validation</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-wizard.html" className="side-nav-link">
                      <span className="menu-text">Wizard</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-fileuploads.html" className="side-nav-link">
                      <span className="menu-text">File Uploads</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-editors.html" className="side-nav-link">
                      <span className="menu-text">Editors</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-layouts.html" className="side-nav-link">
                      <span className="menu-text">Layouts</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarTables"
                aria-expanded="false"
                aria-controls="sidebarTables"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-table-row" />
                </span>
                <span className="menu-text"> Tables </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarTables">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="tables-basic.html" className="side-nav-link">
                      <span className="menu-text">Basic Tables</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="tables-gridjs.html" className="side-nav-link">
                      <span className="menu-text">Gridjs Tables</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="tables-datatable.html" className="side-nav-link">
                      <span className="menu-text">Datatable Tables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarMaps"
                aria-expanded="false"
                aria-controls="sidebarMaps"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-map-2" />
                </span>
                <span className="menu-text"> Maps </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarMaps">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="maps-google.html" className="side-nav-link">
                      <span className="menu-text">Google Maps</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="maps-vector.html" className="side-nav-link">
                      <span className="menu-text">Vector Maps</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="maps-leaflet.html" className="side-nav-link">
                      <span className="menu-text">Leaflet Maps</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-title mt-2">More</li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarLayouts"
                aria-expanded="false"
                aria-controls="sidebarLayouts"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-layout" />
                </span>
                <span className="menu-text"> Layouts </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarLayouts">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a
                      href="layouts-horizontal.html"
                      target="_blank"
                      className="side-nav-link"
                    >
                      Horizontal
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="layouts-detached.html"
                      target="_blank"
                      className="side-nav-link"
                    >
                      Detached
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="layouts-full.html"
                      target="_blank"
                      className="side-nav-link"
                    >
                      Full View
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="layouts-fullscreen.html"
                      target="_blank"
                      className="side-nav-link"
                    >
                      Fullscreen View
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="layouts-hover.html"
                      target="_blank"
                      className="side-nav-link"
                    >
                      Hover Menu
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="layouts-compact.html"
                      target="_blank"
                      className="side-nav-link"
                    >
                      Compact
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="layouts-icon-view.html"
                      target="_blank"
                      className="side-nav-link"
                    >
                      Icon View
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarMultiLevel"
                aria-expanded="false"
                aria-controls="sidebarMultiLevel"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-share" />
                </span>
                <span className="menu-text"> Multi Level </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarMultiLevel">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a
                      data-bs-toggle="collapse"
                      href="#sidebarSecondLevel"
                      aria-expanded="false"
                      aria-controls="sidebarSecondLevel"
                      className="side-nav-link"
                    >
                      <span className="menu-text"> Second Level </span>
                      <span className="menu-arrow" />
                    </a>
                    <div className="collapse" id="sidebarSecondLevel">
                      <ul className="sub-menu">
                        <li className="side-nav-item">
                          <a
                            href="javascript: void(0);"
                            className="side-nav-link"
                          >
                            <span className="menu-text">Item 1</span>
                          </a>
                        </li>
                        <li className="side-nav-item">
                          <a
                            href="javascript: void(0);"
                            className="side-nav-link"
                          >
                            <span className="menu-text">Item 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="side-nav-item">
                    <a
                      data-bs-toggle="collapse"
                      href="#sidebarThirdLevel"
                      aria-expanded="false"
                      aria-controls="sidebarThirdLevel"
                      className="side-nav-link"
                    >
                      <span className="menu-text"> Third Level </span>
                      <span className="menu-arrow" />
                    </a>
                    <div className="collapse" id="sidebarThirdLevel">
                      <ul className="sub-menu">
                        <li className="side-nav-item">
                          <a
                            href="javascript: void(0);"
                            className="side-nav-link"
                          >
                            Item 1
                          </a>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="#sidebarFourthLevel"
                            aria-expanded="false"
                            aria-controls="sidebarFourthLevel"
                            className="side-nav-link"
                          >
                            <span className="menu-text"> Item 2 </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarFourthLevel">
                            <ul className="sub-menu">
                              <li className="side-nav-item">
                                <a
                                  href="javascript: void(0);"
                                  className="side-nav-link"
                                >
                                  <span className="menu-text">Item 2.1</span>
                                </a>
                              </li>
                              <li className="side-nav-item">
                                <a
                                  href="javascript: void(0);"
                                  className="side-nav-link"
                                >
                                  <span className="menu-text">Item 2.2</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* Help Box */}
          <div className="help-box text-center">
            <h5 className="fw-semibold fs-16">Unlimited Access</h5>
            <p className="mb-3 text-muted">
              Upgrade to plan to get access to unlimited reports
            </p>
            <a href="javascript: void(0);" className="btn btn-danger btn-sm">
              Upgrade
            </a>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
