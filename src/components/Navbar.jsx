import { Link } from "react-scroll";

const navItems = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "service", title: "Services" },
  { id: "team", title: "Team" },
  { id: "work", title: "Work" },
  { id: "pricing", title: "Pricing" },
  { id: "contact", title: "Contact Us" },
];

function Navbar({ activeSection, isScrolled }) {
  return (
    <nav
      className={`navbar-scrollspy navbar navbar-default navbar-fixed white bootsnav on no-full ${
        isScrolled ? "" : "navbar-transparent"
      }`}
      data-minus-value-desktop={70}
      data-minus-value-mobile={55}
      data-speed={1000}
    >
      <div className="container">
        <div className="attr-nav">
          <ul className="social-media-dark social-top">
            <li>
              <a href="#" className="fa fa-facebook" />
            </li>
            <li>
              <a href="#" className="fa fa-twitter" />
            </li>
            <li>
              <a href="#" className="fa fa-linkedin-square" />
            </li>
          </ul>
        </div>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="logo nav-link">
            <Link to="home" smooth duration={500}>
              <img
                className="logo logo-display"
                src="assets/images/logo-white.png"
                alt=""
              />
              <img
                className="logo logo-scrolled"
                src="assets/images/logo-black.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div
          className="navbar-collapse collapse"
          id="navbar-menu"
          aria-expanded="false"
        >
          <ul
            className="nav navbar-nav navbar-right nav-scrollspy-onepage"
            data-in="fadeInLeft"
          >
            {navItems.map(({ id, title }) => {
              const baseClass = "nav-link scroll";
              const isActive = activeSection === id ? " active" : "";
              return (
                <li key={id} className={`${baseClass}${isActive}`}>
                  <Link to={id} smooth duration={500}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;