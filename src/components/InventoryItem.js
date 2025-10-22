const InventoryItem = ({ row, remove }) => {
  const getColor = (tags) => {
    switch (tags) {
      case "drink":
        return "bg-primary";
      case "ramen":
        return "bg-success";
      default:
        return;
    }
  };

  return (
    <div className="accordion accordion-flush border-bottom border-1">
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <div className="row">
            <form className="col-1 d-flex align-items-center pe-0 ps-2">
              <button
                type="button"
                className="btn btn-close mb-1"
                aria-label="Close"
                onClick={(e) => {
                  e.preventDefault();
                  remove(row.id);
                }}
              ></button>
            </form>
            <button
              className="col accordion-button collapsed px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#test${row.id.toString().substring(2)}`}
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <h5 className="col grid-text text-dark">{row.title}</h5>
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
