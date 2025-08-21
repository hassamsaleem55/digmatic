import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  return (
    <>
      <div id="loader-overlay">
        <div className="loader-wrapper">
          <div className="arcon-pulse" />
        </div>
      </div>
      <div className="wrapper">
        <Navbar isScrolled={isScrolled} activeSection={activeSection} />
        <Home />
        <About />
        <Services />
        <Team />
        <Work />
        {/* <Pricing /> */}
        <ContactUs />
        <Footer isScrolled={isScrolled} />
      </div>
    </>
  );
}

export default App;
