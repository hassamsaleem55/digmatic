function Pricing() {
  return (
    <>
      <section id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2 className="text-uppercase wow fadeTop" data-wow-delay="0.1s">
                Our Pricing
              </h2>
              <h4
                className="text-uppercase source-font wow fadeTop"
                data-wow-delay="0.2s"
              >
                - Choose Your Plan -
              </h4>
            </div>
          </div>
          <div className="row mt-50">
            <div
              className="col-md-3 pricing-table col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
            >
              <div className="pricing-box">
                <h4>Started</h4>
                <h2>
                  <sup>$</sup>
                  <span>0.99</span>
                </h2>
                <ul>
                  <li>512 GB Ram</li>
                  <li>50 GB Disk</li>
                  <li>1 User</li>
                  <li>4TB Bandwidth</li>
                </ul>
                <div className="pricing-box-bottom">
                  <a href="#" className="btn btn-color btn-circle btn-animate">
                    <span>
                      Purchase Now <i className="mdi mdi-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 pricing-table col-sm-6 wow fadeTop"
              data-wow-delay="0.2s"
            >
              <div className="pricing-box">
                <h4>Basic</h4>
                <h2>
                  <sup>$</sup>
                  <span>19.99</span>
                </h2>
                <ul>
                  <li>512 GB Ram</li>
                  <li>80 GB Disk</li>
                  <li>2 User</li>
                  <li>4TB Bandwidth</li>
                </ul>
                <div className="pricing-box-bottom">
                  <a href="#" className="btn btn-color btn-circle btn-animate">
                    <span>
                      Purchase Now <i className="mdi mdi-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 pricing-table-featured col-sm-6 wow fadeTop"
              data-wow-delay="0.3s"
            >
              <div className="pricing-box">
                <h4>Standard</h4>
                <h2>
                  <sup>$</sup>
                  <span>39.99</span>
                </h2>
                <div className="pricicng-feature">
                  <ul>
                    <li>768 GB Ram</li>
                    <li>80 GB Disk</li>
                    <li>3 User</li>
                    <li>Full Data Security</li>
                    <li>Unlimited Questions</li>
                    <li>6TB Bandwidth</li>
                  </ul>
                </div>
                <div className="pricing-box-bottom">
                  <a href="#" className="btn btn-color btn-circle btn-animate">
                    <span>
                      Purchase Now <i className="mdi mdi-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 pricing-table col-sm-6 wow fadeTop"
              data-wow-delay="0.4s"
            >
              <div className="pricing-box">
                <h4>Pro</h4>
                <h2>
                  <sup>$</sup>
                  <span>49.99</span>
                </h2>
                <ul>
                  <li>1 TB Ram</li>
                  <li>1 TB Disk</li>
                  <li>4 User</li>
                  <li>4TB Bandwidth</li>
                </ul>
                <div className="pricing-box-bottom">
                  <a href="#" className="btn btn-color btn-circle btn-animate">
                    <span>
                      Purchase Now <i className="mdi mdi-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
