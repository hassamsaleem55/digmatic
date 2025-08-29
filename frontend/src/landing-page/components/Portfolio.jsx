import { useState } from "react";
import { Animated, animations } from "./Animate";

function Portfolio({ imagePath }) {
  const catPortfolio = [
    { id: 1, catName: "All" },
    { id: 2, catName: "Web" },
    { id: 3, catName: "Branding" },
    { id: 4, catName: "Print" },
  ];
  const [selectedTab, setSelectedTab] = useState(catPortfolio[0]);
  const portfolioImagePath = imagePath + "/portfolio";

  const portfolioGrid = [
    {
      id: 1,
      img: `${portfolioImagePath}/grid/1.jpg`,
      title: "Business Cards",
      dataGroups: ["all", "print", "branding"],
    },
    {
      id: 2,
      img: `${portfolioImagePath}/grid/2.jpg`,
      title: "Magazine",
      dataGroups: ["all", "branding", "web"],
    },
    {
      id: 3,
      img: `${portfolioImagePath}/grid/3.jpg`,
      title: "Rabycad CD Design",
      dataGroups: ["all", "branding"],
    },
    {
      id: 4,
      img: `${portfolioImagePath}/grid/4.jpg`,
      title: "Micro Chips",
      dataGroups: ["all", "print"],
    },
    {
      id: 5,
      img: `${portfolioImagePath}/grid/5.jpg`,
      title: "Flyer",
      dataGroups: ["all", "web"],
    },
    {
      id: 6,
      img: `${portfolioImagePath}/grid/6.jpg`,
      title: "Flat Web Design",
      dataGroups: ["all", "web", "print"],
    },
  ];

  return (
    <section className="pt-0 pb-0 white-bg" id="work">
      <div className="container-fluid">
        <div className="row">
          <Animated as="div" className="portfolio-container text-center">
            <ul id="portfolio-filter" className="list-inline fadeTop">
              {catPortfolio.map((item) => (
                <li
                  key={item.id}
                  className={selectedTab.id === item.id ? "active" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  {item.catName}
                </li>
              ))}
            </ul>
            <ul id="portfolio-grid" className="three-column hover-two">
              {portfolioGrid
                .filter((p) =>
                  selectedTab.catName.toLowerCase() === "all"
                    ? true
                    : p.dataGroups.includes(selectedTab.catName.toLowerCase())
                )
                .map(({ id, img, title, dataGroups }) => (
                  <Animated
                    as="li"
                    variants={animations.zoomIn}
                    key={id}
                    className="portfolio-item"
                  >
                    <div className="portfolio gallery-image-hover">
                      <div className="dark-overlay" />
                      <img src={img} alt={title} />
                      <div className="portfolio-wrap">
                        <div className="portfolio-description">
                          <h3 className="portfolio-title">{title}</h3>
                          <a href="#" className="links">
                            {`${dataGroups[1] ?? "design"} Design`}
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
                  </Animated>
                ))}
            </ul>
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
