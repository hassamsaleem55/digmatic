import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0",
};

const arrTestimonials = [
  {
    id: 1,
    name: "Hank Dano",
    designation: "Founder &amp; CEO of Arcon",
    img: "assets/images/team/avatar-1.jpg",
    comment:
      "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
  },
  {
    id: 2,
    name: "Julia Banks",
    designation: "CEO of Arcon",
    img: "assets/images/team/avatar-2.jpg",
    comment:
      "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
  },
  {
    id: 3,
    name: "Mark Smith",
    designation: "CEO of Arcon",
    img: "assets/images/team/avatar-3.jpg",
    comment:
      "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
  },
];

function Testimonials() {
  return (
    <section className="grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2 className="text-uppercase wow fadeTop" data-wow-delay="0.1s">
              {`Testimonials`}
            </h2>
            <h4
              className="text-uppercase source-font wow fadeTop"
              data-wow-delay="0.2s"
            >
              {`- Statisfied Clients -`}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="slick testimonial">
              <Slider {...sliderSettings}>
                {arrTestimonials.map(
                  ({ id, name, designation, img, comment }) => {
                    return (
                      <div key={id} className="testimonial-item">
                        <div className="testimonial-content">
                          <img
                            className="img-responsive img-circle"
                            src={img}
                            alt={`avatar-${id}`}
                          />
                          <h5>{name}</h5>
                          <p>{designation} </p>
                          <h4>{comment}</h4>
                        </div>
                      </div>
                    );
                  }
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
