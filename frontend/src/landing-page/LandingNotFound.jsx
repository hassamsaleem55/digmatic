import { Link } from "react-router-dom";

function LandingNotFound() {
  return (
    <div className="title-error-bg error-cover-bg">
      <div className="container">
        <div className="page-title text-center">
          <h1>404 Error</h1>
          <h2>Page Not Found</h2>
          <p>You can start from the home page</p>
          <p className="mt-30">
            <Link to="/" className="btn btn-color btn-circle">
              <i className="fa fa-chevron-left" /> Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingNotFound;
