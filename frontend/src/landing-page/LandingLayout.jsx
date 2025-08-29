function LandingLayout({ children }) {
  return (
    <>
      <div id="loader-overlay">
        <div className="loader-wrapper">
          <div className="arcon-pulse" />
        </div>
      </div>
      <div className="wrapper" style={{ display: "none" }}>
        {children}
      </div>
    </>
  );
}

export default LandingLayout;
