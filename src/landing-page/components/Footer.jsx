import { useEffect } from "react";
import { Link } from "react-scroll";

function Footer({ imagePath, isScrolled }) {
  useEffect(() => {
    const backToTopBtn = document.querySelector("#back-to-top");

    if (backToTopBtn) {
      const scrollTrigger = 100;

      const backToTop = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > scrollTrigger) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
      };

      // Run on load
      backToTop();

      // Run on scroll
      window.addEventListener("scroll", backToTop);

      // Scroll to top smoothly
      backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }, []);
  return (
    <>
      <footer className="footer" id="footer-fixed">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="widget widget-text">
                  {/* <div className="logo logo-footer">
                    <a href="index.html">
                      <img
                        className="logo logo-display"
                        src=`${imagePath}/images/logo-footer.png`
                        alt=""
                      />
                    </a>
                  </div> */}
                  <h2 style={{ color: "white" }}>Digmatic</h2>
                  <p>
                    We’re nuts about improving your business so we ensure that
                    we track results from day one. Sure, we come up with great
                    creative ideas that engage and captivate your customers,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    varius quam ut magna ultricies pellentesque.
                  </p>
                </div>
              </div>
              {/* <div className="col-sm-6 col-md-2">
                <div className="widget widget-links">
                  <h5 className="widget-title">Work With Us</h5>
                  <ul>
                    <li>
                      <a href="#">Themeforest</a>
                    </li>
                    <li>
                      <a href="#">Audio Jungle</a>
                    </li>
                    <li>
                      <a href="#">Code Canyon</a>
                    </li>
                    <li>
                      <a href="#">Video Hive</a>
                    </li>
                    <li>
                      <a href="#">Envato Market</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-2">
                <div className="widget widget-links">
                  <h5 className="widget-title">Useful Links</h5>
                  <ul>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact-simple.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="service-simple.html">Our Services</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="career.html">Careers</a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                <div className="widget widget-text widget-links">
                  <h5 className="widget-title">Contact Us</h5>
                  <ul>
                    <li>
                      <i className="mdi mdi-map-marker" />
                      <a href="#">44 Shirley Ave. West Chicago, IL 60185</a>
                    </li>
                    <li>
                      <i className="mdi mdi-cellphone" />
                      <a href="tel:(001) 7878 234 564">(001) 7878 234 564</a>
                    </li>
                    <li>
                      <i className="mdi mdi-email" />
                      <a href="mailto:hiarcon@gmail.com">hiarcon@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          {/* <div className="container"> */}
          {/* <div className="row"> */}
          {/* <div className="col-md-6 col-xs-12">
                <ul className="social-media">
                  <li>
                    <a href="#" className="fa fa-linkedin" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-facebook" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-pinterest" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-instagram" />
                  </li>
                </ul>
              </div> */}
          {/* <div className="col-md-6 col-xs-12"> */}
          <div className="copy-right text-center">
            © 2025 Digmatic. All rights reserved
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </footer>
      <div className="footer-height" style={{ height: "448px" }}></div>
      <Link
        id="back-to-top"
        title="Back to top"
        to="home"
        smooth={true}
        duration={500}
        className={isScrolled ? "show" : ""}
      >
        ↑
      </Link>
    </>
  );
}

export default Footer;
