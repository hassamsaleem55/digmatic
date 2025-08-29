import { Animated } from "./Animate";

function Team({ imagePath }) {
  const teamImagePath = imagePath + "/team";
  const teamItems = [
    {
      id: 1,
      img: `${teamImagePath}/team-01.jpg`,
      name: "David Marks",
      designation: "UI/UX Designer",
      socialLinks: [
        { icon: "fa fa-facebook", href: "#" },
        { icon: "fa fa-twitter", href: "#" },
        { icon: "fa fa-youtube", href: "#" },
      ],
    },
    {
      id: 2,
      img: `${teamImagePath}/team-02.jpg`,
      name: "Lynda Stone",
      designation: "Photographer",
      socialLinks: [
        { icon: "fa fa-facebook", href: "#" },
        { icon: "fa fa-twitter", href: "#" },
        { icon: "fa fa-youtube", href: "#" },
      ],
    },
    {
      id: 3,
      img: `${teamImagePath}/team-03.jpg`,
      name: "Karl Casey",
      designation: "Web Developer",
      socialLinks: [
        { icon: "fa fa-facebook", href: "#" },
        { icon: "fa fa-twitter", href: "#" },
        { icon: "fa fa-youtube", href: "#" },
      ],
    },
    {
      id: 4,
      img: `${teamImagePath}/team-04.jpg`,
      name: "Roland Buford",
      designation: "CEO/Founder",
      socialLinks: [
        { icon: "fa fa-facebook", href: "#" },
        { icon: "fa fa-twitter", href: "#" },
        { icon: "fa fa-youtube", href: "#" },
      ],
    },
  ];

  return (
    <section className="white-bg" id="team">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <Animated as="h2" className="text-uppercase">
              {`Meet Our Team`}
            </Animated>
            <Animated as="h4" className="text-uppercase source-font">
              {`- We Are Stronger -`}
            </Animated>
          </div>
        </div>
        <div className="row mt-50">
          {teamItems.map(({ id, img, name, designation, socialLinks }) => {
            return (
              <div key={id} className="col-md-3 col-sm-6 col-xs-12">
                <Animated
                  as="div"
                  className="team-member-container gallery-image-hover"
                >
                  <img
                    src={img}
                    className="img-responsive"
                    alt={`team-0${id}`}
                  />
                  <div className="member-caption">
                    <div className="member-description text-center">
                      <div className="member-description-wrap">
                        <Animated as="h4" className="member-title">
                          {name}
                        </Animated>
                        <Animated as="p" className="member-subtitle">
                          {designation}
                        </Animated>
                        <ul className="member-icons">
                          {socialLinks.map((link, idx) => {
                            return (
                              <li key={idx} className="social-icon">
                                <a href={link.href}>
                                  <i className={link.icon} />
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Animated>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
