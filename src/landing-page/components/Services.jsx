import { Animated, animations } from "./Animate";

function Services() {
  const serviceItems = [
    {
      id: 1,
      icon: "mdi mdi-emby",
      title: "Web Design",
      desc: "Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.",
    },
    {
      id: 2,
      icon: "mdi mdi-qrcode",
      title: "App Development",
      desc: "We build mobile apps for the conference, integrating unique content and branding to create.",
    },
    {
      id: 3,
      icon: "mdi mdi-diamond",
      title: "Digital Marketing",
      desc: "Google has made this important since 1998 when it launched. Content became, and still is king since websites.",
    },
    {
      id: 4,
      icon: "mdi mdi-cat",
      title: "UI / UX Friendly",
      desc: "UX design refers to the term user experience design, while UI design stands for user interface design",
    },
  ];

  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <Animated as="h2" className="text-uppercase">
              {`Our Services`}
            </Animated>
            <Animated as="h4" className="text-uppercase source-font">
              {`- Design your presence -`}
            </Animated>
          </div>
        </div>

        <div className="row mt-50">
          {serviceItems.map(({ id, icon, title, desc }) => (
            <Animated
              as="div"
              key={id}
              className="col-md-3 feature-box text-center col-sm-6"
              variants={animations.fadeInUp}
            >
              <Animated
                as="i"
                className={`${icon} font-40px dark-icon white-bg-icon circle-icon fade-icon`}
                variants={animations.zoomIn}
              />
              <Animated as="h4" className="upper-case">
                {title}
              </Animated>
              <Animated as="p">{desc}</Animated>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
