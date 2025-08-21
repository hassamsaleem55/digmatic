const ServiceItems = [
  {
    id: 1,
    icon: "mdi mdi-emby",
    title: "Web Design",
    desc: "Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.",
    delay: "0.1s",
  },
  {
    id: 2,
    icon: "mdi mdi-qrcode",
    title: "App Development",
    desc: "We build mobile apps for the conference, integrating unique content and branding to create.",
    delay: "0.2s",
  },
  {
    id: 3,
    icon: "mdi mdi-diamond",
    title: "Digital Marketing",
    desc: "Google has made this important since 1998 when it launched. Content became, and still is king since websites.",
    delay: "0.3s",
  },
  {
    id: 4,
    icon: "mdi mdi-cat",
    title: "UI / UX Friendly",
    desc: "UX design refers to the term user experience design, while UI design stands for user interface design",
    delay: "0.4s",
  },
];

function Services() {
  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2 className="text-uppercase wow fadeTop" data-wow-delay="0.1s">
              {`Our Services`}
            </h2>
            <h4
              className="text-uppercase source-font wow fadeTop"
              data-wow-delay="0.2s"
            >
              {`- Design your presence -`}
            </h4>
          </div>
        </div>
        <div className="row mt-50">
          {ServiceItems.map(({ id, icon, title, desc, delay }) => {
            return (
              <div
                key={id}
                className="col-md-3 feature-box text-center col-sm-6 wow fadeTop"
                data-wow-delay={delay}
              >
                <i
                  className={`${icon} font-40px dark-icon white-bg-icon circle-icon fade-icon`}
                />
                <h4 className="upper-case">Web Design</h4>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
