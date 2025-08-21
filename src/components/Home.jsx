import { useEffect } from "react";

const slides = [
  {
    id: 1,
    bg: "assets/images/slides/home-bg-26.jpg",
    title: "Everything is Design",
    heading: "Everything",
    subtitle: "Good design is obvious. Great design is transparent.",
    buttons: [
      {
        text: "Know More",
        href: "#",
        className: "btn btn-color btn-circle btn-animate",
      },
      {
        text: "Contact Us",
        href: "#",
        className: "btn btn-outline-white btn-circle",
      },
    ],
  },
  {
    id: 2,
    bg: "assets/images/slides/home-bg-27.jpg",
    title: "It’s a piece of cake",
    heading: "Digmatic",
    subtitle: null,
    buttons: [
      {
        text: "Learn More",
        href: "#",
        className: "btn btn-color btn-circle btn-animate",
      },
      {
        text: "Our Services",
        href: "#",
        className: "btn btn-outline-white btn-circle",
      },
    ],
  },
];
function Home() {
  useEffect(() => {
    $(".slider-bg").flexslider({
      animation: "fade",
      slideshow: true,
      controlNav: true,
      keyboard: true,
    });
  }, []);

  return (
    <section className="pt-0 pb-0" id="home">
      <div className="slider-bg flexslider">
        <ul className="slides">
          {slides.map(({ id, bg, title, heading, subtitle, buttons }) => (
            <li key={id}>
              <div
                className="slide-img"
                style={{
                  background: `url(${bg}) center center / cover no-repeat`,
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
                        <a key={idx} href={btn.href} className={btn.className}>
                          <span>
                            {btn.text}{" "}
                            {btn.text.includes("More") && (
                              <i className="mdi mdi-arrow-right" />
                            )}
                          </span>
                        </a>
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
