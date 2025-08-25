import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
// import Testimonials from "./Testimonials";

function Work({ imagePath }) {
  return (
    <>
      <Portfolio imagePath={imagePath} />
      <Achievements />
      {/* <Testimonials imagePath={imagePath} /> */}
    </>
  );
}

export default Work;
