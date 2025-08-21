const catPortfolio = [
  { id: 1, catName: "All", isActive: true },
  { id: 2, catName: "Web", isActive: false },
  { id: 3, catName: "Branding", isActive: false },
  { id: 4, catName: "Print", isActive: false },
];

const portfolioGrid = [
  {
    id: 1,
    img: "assets/images/portfolio/grid/1.jpg",
    title: "Business Cards",
    dataGroups: ["all", "print", "branding"],
  },
  {
    id: 2,
    img: "assets/images/portfolio/grid/2.jpg",
    title: "Magazine",
    dataGroups: ["all", "branding", "web"],
  },
  {
    id: 3,
    img: "assets/images/portfolio/grid/3.jpg",
    title: "Rabycad CD Design",
    dataGroups: ["all", "branding"],
  },
  {
    id: 4,
    img: "assets/images/portfolio/grid/4.jpg",
    title: "Micro Chips",
    dataGroups: ["all", "print"],
  },
  {
    id: 5,
    img: "assets/images/portfolio/grid/5.jpg",
    title: "Flyer",
    dataGroups: ["all", "web"],
  },
  {
    id: 6,
    img: "assets/images/portfolio/grid/6.jpg",
    title: "Flat Web Design",
    dataGroups: ["all", "web", "print"],
  },
];

function Portfolio() {
  return (
    <section className="pt-0 pb-0 white-bg" id="work">
      <div className="container-fluid">
        <div className="row">
          <div className="portfolio-container text-center">
            <ul
              id="portfolio-filter"
              className="list-inline wow fadeTop"
              data-wow-delay="0.1s"
            >
              {catPortfolio.map(({ id, catName, isActive }) => {
                return (
                  <li
                    key={id}
                    className={isActive ? "active" : ""}
                    data-group={catName.toLowerCase()}
                  >
                    {catName}
                  </li>
                );
              })}
            </ul>
            <ul id="portfolio-grid" className="three-column hover-two">
              {portfolioGrid.map(({ id, img, title, dataGroups }) => {
                return (
                  <li
                    key={id}
                    className="portfolio-item wow fadeIn"
                    data-wow-delay={`0.${id}s`}
                    data-groups={JSON.stringify(dataGroups)}
                  >
                    <div className="portfolio gallery-image-hover">
                      <div className="dark-overlay" />
                      <img src={img} alt="" />
                      <div className="portfolio-wrap">
                        <div className="portfolio-description">
                          <h3 className="portfolio-title">{title}</h3>
                          <a href="#" className="links">
                            {`${dataGroups[1]} Design`}
                          </a>
                        </div>
                        <ul className="portfolio-details">
                          <li>
                            <a className="alpha-lightbox" href={img}>
                              <i className="fa fa-search" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
