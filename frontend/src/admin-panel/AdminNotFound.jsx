function AdminNotFound({ imagePath }) {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-4">
        <div className="text-center">
          <img
            src={`${imagePath}/error/error-404.png`}
            height={230}
            alt="File not found Image"
          />
          <h4 className="text-uppercase text-danger mt-3">{`Page Not Found`}</h4>
          <p className="text-muted mt-3">
            {`It's looking like you may have taken a wrong turn. Don't worry... it
            happens to the best of us. Here's a little tip that might help you
            get back on track.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminNotFound;
