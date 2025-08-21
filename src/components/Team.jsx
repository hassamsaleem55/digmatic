const teamItems = [
  {
    id: 1,
    img: "assets/images/team/team-01.jpg",
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
    img: "assets/images/team/team-02.jpg",
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
    img: "assets/images/team/team-03.jpg",
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
    img: "assets/images/team/team-04.jpg",
    name: "Roland Buford",
    designation: "CEO/Founder",
    socialLinks: [
      { icon: "fa fa-facebook", href: "#" },
      { icon: "fa fa-twitter", href: "#" },
      { icon: "fa fa-youtube", href: "#" },
    ],
  },
];

function Team() {
  return (
    <section className="white-bg" id="team">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2 className="text-uppercase wow fadeTop" data-wow-delay="0.1s">
              {`Meet Our Team`}
            </h2>
            <h4
              className="text-uppercase source-font wow fadeTop"
              data-wow-delay="0.2s"
            >
              {`- We Are Stronger -`}
            </h4>
          </div>
        </div>
        <div className="row mt-50">
          {teamItems.map(({ id, img, name, designation, socialLinks }) => {
            return (
              <div
                key={id}
                className="col-md-3 col-sm-6 col-xs-12 wow fadeTop"
                data-wow-delay={`0.${id}s`}
              >
                <div className="team-member-container gallery-image-hover">
                  <img
                    src={img}
                    className="img-responsive"
                    alt={`team-0${id}`}
                  />
                  <div className="member-caption">
                    <div className="member-description text-center">
                      <div className="member-description-wrap">
                        <h4 className="member-title">{name}</h4>
                        <p className="member-subtitle">{designation}</p>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
