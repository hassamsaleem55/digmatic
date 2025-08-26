import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Work from "./components/Work";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function LandingWrapper({ imagePath }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        if (window.scrollY >= offsetTop - 100) {
          current = section.getAttribute("id");
        }
      });

      setIsScrolled(scrollTop > 34);
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (isLoading) {
    return (
      <div id="loader-overlay">
        <div className="loader-wrapper">
          <div className="arcon-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Navbar
        imagePath={imagePath}
        isScrolled={isScrolled}
        activeSection={activeSection}
      />
      <Home imagePath={imagePath} />
      <About imagePath={imagePath} />
      <Services />
      <Team imagePath={imagePath} />
      <Work imagePath={imagePath} />
      {/* <Pricing /> */}
      <ContactUs />
      <Footer imagePath={imagePath} isScrolled={isScrolled} />
    </div>
  );
}

export default LandingWrapper;
