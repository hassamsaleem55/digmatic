import { Animated } from "./Animate";

function About({ imagePath }) {
  const featureItems = [
    {
      id: 1,
      icon: "mdi mdi-lock-pattern",
      title: "Brand Design",
      desc: "Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.",
    },
    {
      id: 2,
      icon: "mdi mdi-test-tube",
      title: "App Development",
      desc: "We build mobile apps for the conference, integrating unique content and branding to create.",
    },
    {
      id: 3,
      icon: "mdi mdi-lightbulb-on",
      title: "Digital Marketing",
      desc: "Google has made this important since 1998 when it launched. Content became, and still is king since websites.",
    },
  ];

  return (
    <>
      <section id="about" className="about-section first-ico-box">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <Animated as="h2" className="text-uppercase">{`Who We Are`}</Animated>
              <Animated as="h4" className="text-uppercase source-font">
                {`- The world at your fingertips -`}
              </Animated>
              <div className="mt-30">
                <Animated as="p">
                  {`We’re nuts about improving your business so we ensure that we
                  track results from day one. Sure, we come up with great
                  creative ideas that engage and captivate your customers, Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
                  quam ut magna ultricies pellentesque.`}
                </Animated>
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
              backgroundImage: `url(${imagePath}/onepage-bg-left.jpg)`,
            }}
          />
        </div>
        <div className="container">
          <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
            <Animated as="h1" className="lato-font font-700">{`What We Do`}</Animated>
            <Animated as="h4" className="mt-10 line-height-26">
              {`We develop big ideas that sell.`}
            </Animated>
            <div className="left-service-box pt-40 pb-20 row">
              {featureItems.map(({ id, icon, title, desc }) => {
                return (
                  <div
                    key={id}
                    className="col-md-12 feature-box text-left mb-50 col-sm-6
                   "
                  >
                    <div className="pull-left">
                      <Animated as="i" className={`${icon} font-60px blue-icon`} />
                    </div>
                    <div className="pull-right">
                      <Animated as="h5" className="mt-0 upper-case">
                        {title}
                      </Animated>
                      <Animated as="p">{desc}</Animated>
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
