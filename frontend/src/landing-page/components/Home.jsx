import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import $ from "jquery";

function Home() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [slides, setSlides] = useState([]);
  const buttons = [
    {
      text: "Our Services",
      href: "service",
      className: "btn btn-color btn-circle",
    },
    {
      text: "Contact Us",
      href: "contact",
      className: "btn btn-outline-white btn-circle",
    },
  ];

  useEffect(() => {
    import("../custom-js/flexslider-plugin.js").then(() => {
      $(".slider-bg").flexslider({
        animation: "fade",
        slideshow: true,
        controlNav: true,
        directionNav: true,
        keyboard: true
      });
    });

    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${API_BASE_URL}/banners`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    setSlides(result.banners);
  };

  return (
    <section className="pt-0 pb-0" id="home">
      <div className="slider-bg flexslider">
        <ul className="slides">
          {slides.map(({ _id, img, title, heading, subtitle }) => (
            <li key={_id}>
              <div
                className="slide-img"
                style={{
                  background: `url(${img}) center center / cover no-repeat`,
                }}
                data-stellar-background-ratio="0.2"
              />
              <div className="hero-text-wrap">
                <div className="hero-text white-color">
                  <div className="container text-center">
                    {title && (
                      <h2 className="text-uppercase font-400 source-font">
                        {title}
                      </h2>
                    )}
                    {heading && (
                      <h1 className="text-uppercase font-700">{heading}</h1>
                    )}
                    {subtitle && <h3 className="font-400">{subtitle}</h3>}
                    <p className="text-center mt-30">
                      {buttons.map((btn, idx) => (
                        <Link
                          key={idx}
                          smooth
                          duration={500}
                          to={btn.href}
                          className={btn.className}
                        >
                          <span>
                            {btn.text}
                            {btn.text.includes("More") && (
                              <i className="mdi mdi-arrow-right" />
                            )}
                          </span>
                        </Link>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
