"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { config } from "../../utilities/config";
import AnimatedSection from "./AnimatedSection";

const landingImagesPath = config.basePaths.landingAssets.images;
const imagePath = landingImagesPath + "/portfolio";
const catPortfolio = [
  { id: 1, catName: "All" },
  { id: 2, catName: "Web" },
  { id: 3, catName: "Branding" },
  { id: 4, catName: "Print" },
];

const portfolioGrid = [
  {
    id: 1,
    img: `${imagePath}/grid/1.jpg`,
    title: "Business Cards",
    dataGroups: ["all", "print", "branding"],
  },
  {
    id: 2,
    img: `${imagePath}/grid/2.jpg`,
    title: "Magazine",
    dataGroups: ["all", "branding", "web"],
  },
  {
    id: 3,
    img: `${imagePath}/grid/3.jpg`,
    title: "Rabycad CD Design",
    dataGroups: ["all", "branding"],
  },
  {
    id: 4,
    img: `${imagePath}/grid/4.jpg`,
    title: "Micro Chips",
    dataGroups: ["all", "print"],
  },
  {
    id: 5,
    img: `${imagePath}/grid/5.jpg`,
    title: "Flyer",
    dataGroups: ["all", "web"],
  },
  {
    id: 6,
    img: `${imagePath}/grid/6.jpg`,
    title: "Flat Web Design",
    dataGroups: ["all", "web", "print"],
  },
];

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState(catPortfolio[0]);

  return (
    <AnimatedSection className="pt-0 pb-0 white-bg" id="work">
      <div className="container-fluid">
        <div className="row">
          <div className="portfolio-container text-center">
            <ul id="portfolio-filter" className="list-inline fadeTop">
              {catPortfolio.map((item) => (
                <motion.li
                  key={item.id}
                  initial={false}
                  className={selectedTab.id === item.id ? "active" : ""}
                  onClick={() => setSelectedTab(item)}
                >
                  {item.catName}
                  {item.catName === selectedTab.catName ? (
                    <motion.div layoutId="underline" />
                  ) : null}
                </motion.li>
              ))}
            </ul>
            <ul id="portfolio-grid" className="three-column hover-two">
              <AnimatePresence mode="popLayout">
                {portfolioGrid
                  .filter((p) =>
                    selectedTab.catName.toLowerCase() === "all"
                      ? true
                      : p.dataGroups.includes(selectedTab.catName.toLowerCase())
                  )
                  .map(({ id, img, title, dataGroups }) => (
                    <motion.li
                      key={id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
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
                    </motion.li>
                  ))}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
