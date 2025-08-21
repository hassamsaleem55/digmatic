function ContactUs() {
  return (
    <section className="contact-us white-bg" id="contact">
      <div className="container">
        <div className="clearfix">
          <div className="bg-flex-right col-md-5 map-section">
            <iframe
              title="Digmatic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.809873419421!2d73.1173637!3d31.419363999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269004a43a4f1%3A0x83eab3f877b15c21!2sRoyal%20Madina%20Academy!5e0!3m2!1sen!2s!4v1755710668726!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-about-left col-md-7 text-left">
            <h2
              className="text-uppercase font-700 wow fadeTop"
              data-wow-delay="0.1s"
            >
              {`Contact Us`}
            </h2>
            <h4
              className="text-uppercase source-font wow fadeTop"
              data-wow-delay="0.2s"
            >
              {`- Stay in Touch -`}
            </h4>
            <form
              name="contact-form"
              id="contact-form"
              action="#"
              method="POST"
              className="mt-50"
            >
              <div className="messages" />
              <div className="form-group wow fadeTop" data-wow-delay="0.1s">
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  required="required"
                  placeholder="Your Name"
                  data-error="Your Name is Required"
                />
                <div className="help-block with-errors mt-20" />
              </div>
              <div className="form-group wow fadeTop" data-wow-delay="0.2s">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-error="Please Enter Valid Email"
                />
                <div className="help-block with-errors mt-20" />
              </div>
              <div className="form-group wow fadeTop" data-wow-delay="0.3s">
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows={7}
                  placeholder="Your Message"
                  required=""
                  data-error="Please, Leave us a message"
                  defaultValue={""}
                />
                <div className="help-block with-errors mt-20" />
              </div>
              <button
                type="submit"
                name="submit"
                className="btn btn-color btn-circle wow fadeTop"
                data-wow-delay="0.4s"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
