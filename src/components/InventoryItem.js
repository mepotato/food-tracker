const InventoryItem = ({ row, remove }) => {
  const getColor = (tags) => {
    switch (tags) {
      default:
        return;
      case "drink":
        return "bg-primary";
      case "ramen":
        return "bg-success";
    }
  };

  return (
    <div className="accordion accordion-flush border-bottom border-1">
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <div className="row">
            <form className="col-1 d-flex align-items-center">
              <button
                className="btn btn-primary bg-transparent border-0 mt-0 mb-1 p-0 text-danger"
                onClick={(e) => {
                  e.preventDefault();
                  remove(row.id);
                }}
              >
                <small>x</small>
              </button>
            </form>
            <button
              className="col accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#test${row.id.toString().substring(2)}`}
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <div className="col">
                <h5 className="grid-text text-dark">{row.title}</h5>
              </div>
              <h5 className="col-3 grid-text text-dark">{row.date}</h5>
              <h5
                className={`col-3 grid-text text-dark rounded d-flex justify-content-center ${getColor(
                  row.tags
                )}`}
              >
                {row.tags}
              </h5>
            </button>
          </div>
        </h2>
        <div
          id={`test${row.id.toString().substring(2)}`}
          className="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div className="accordion-body">
            <div className="grid-text text-dark">
              <div className="d-flex border-bottom border-1 border-success">
                <p className="p-2 mb-0">
                  <strong className="pe-3">Quantity:</strong>
                  {row.quantity}
                </p>
              </div>
            </div>

            <div className="grid-text text-dark">
              <div className="d-flex border-bottom border-1 border-success">
                <p className="p-2 mb-0">
                  <strong className="pe-3">Image:</strong> {row.image}
                </p>
              </div>
            </div>

            <div className="grid-text text-dark">
              <div className="d-flex border-bottom border-1 border-success">
                <p className="p-2 mb-0">
                  <strong className="pe-3">Description:</strong>{" "}
                  {row.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
