import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Info from "./Info";

const Item = ({ row, handleCheckbox }) => {
  const fields =
    row.whichList === "Items to Buy"
      ? [
          {
            title: "Who Requested",
            content: row.whoRequested,
          },
          {
            title: "Where to Buy",
            content: row.whereToBuy,
          },
          {
            title: "Quantity",
            content: `${row.quantity}  ${row.quantityUnits}`,
          },
          {
            title: "Image Link",
            content: row.imageLink,
          },
        ]
      : [
          {
            title: "Quantity",
            content: `${row.quantity}  ${row.quantityUnits}`,
          },
          {
            title: "Image Link",
            content: row.imageLink,
          },
        ];

  const getColor = (type) => {
    switch (type) {
      case "drink":
        return "bg-primary";
      case "ramen":
        return "bg-success";
    }
  };

  return (
    <Accordion>
      <Card className="border-0">
        <Card.Header>
          <div className="row">
            <form className="col-1 d-flex align-items-center">
              <button
                className="btn btn-primary bg-transparent border-0 mt-0 mb-1 p-0 text-danger"
                onClick={(e) => {
                  e.preventDefault();
                  handleCheckbox(row.id);
                }}
                // onChange={(e) => handleCheckbox(e.target.checked, row.id)}
              >
                <small>x</small>
              </button>
            </form>
            <Accordion.Toggle
              className="col w-100 bg-transparent border-0"
              as={Button}
              eventKey="0"
            >
              <div className="row">
                <div className="col-5 d-flex justify-content-start">
                  <h5 className="grid-text text-dark">{row.itemName}</h5>
                </div>
                <h5 className="col-4 grid-text text-dark">{row.expiryDate}</h5>
                <h5
                  className={`col-3 grid-text text-dark rounded ${getColor(
                    row.itemType
                  )}`}
                >
                  {row.itemType}
                </h5>
              </div>
            </Accordion.Toggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="pt-1 border-0 border-success">
            <div className="grid-text text-dark">
              {fields.map((field) => (
                <Info
                  title={field.title}
                  content={field.content}
                  key={field.title}
                />
              ))}
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Item;
