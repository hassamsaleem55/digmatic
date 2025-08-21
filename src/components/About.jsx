const featureItems = [
  {
    id: 1,
    icon: "mdi mdi-lock-pattern",
    title: "Brand Design",
    desc: "Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.",
    delay: "0.1s",
  },
  {
    id: 2,
    icon: "mdi mdi-test-tube",
    title: "App Development",
    desc: "We build mobile apps for the conference, integrating unique content and branding to create.",
    delay: "0.2s",
  },
  {
    id: 3,
    icon: "mdi mdi-lightbulb-on",
    title: "Digital Marketing",
    desc: "Google has made this important since 1998 when it launched. Content became, and still is king since websites.",
    delay: "0.3s",
  },
];

function About() {
  return (
    <>
      <section className="first-ico-box" id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2 className="text-uppercase wow fadeTop" data-wow-delay="0.1s">
                {`Who We Are`}
              </h2>
              <h4
                className="text-uppercase source-font wow fadeTop"
                data-wow-delay="0.2s"
              >
                {`- The world at your fingertips -`}
              </h4>
              <div className="mt-30 wow fadeTop" data-wow-delay="0.3s">
                <p>
                  {`We’re nuts about improving your business so we ensure that we
                  track results from day one. Sure, we come up with great
                  creative ideas that engage and captivate your customers, Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
                  quam ut magna ultricies pellentesque.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg">
        <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
          <div
            className="bg-flex-holder bg-flex-cover"
            style={{
              backgroundImage: "url(assets/images/onepage-bg-left.jpg)",
            }}
          />
        </div>
        <div className="container">
          <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
            <h1
              className="lato-font font-700 wow fadeTop"
              data-wow-delay="0.1s"
            >
              {`What We Do`}
            </h1>
            <h4
              className="mt-10 line-height-26 wow fadeTop"
              data-wow-delay="0.2s"
            >
              {`We develop big ideas that sell.`}
            </h4>
            <div className="left-service-box pt-40 pb-20 row">
              {featureItems.map(({ id, icon, title, desc, delay }) => {
                return (
                  <div
                    key={id}
                    className="col-md-12 feature-box text-left mb-50 col-sm-6 wow fadeTop"
                    data-wow-delay={delay}
                  >
                    <div className="pull-left">
                      <i className={`${icon} font-60px blue-icon`} />
                    </div>
                    <div className="pull-right">
                      <h5 className="mt-0 upper-case">{title}</h5>
                      <p>{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
