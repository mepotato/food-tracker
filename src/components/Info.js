const Info = ({ title, content }) => (
  <div className="d-flex border-bottom border-1 border-success">
    <p className="p-2 mb-0">
      <strong className="pe-3">{title}:</strong> {content}
    </p>
  </div>
);

export default Info;
