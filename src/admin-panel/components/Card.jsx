function Card({ header = null, children }) {
  return (
    <div
      className="card"
      style={{ minHeight: "calc(100vh - 168px)", height: "auto" }}
    >
      {header !== null && (
        <div className="card-header">
          <h4 className="header-title">{header}</h4>
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
