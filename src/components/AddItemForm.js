import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AddItemForm = ({ addOwnedItem, addBuyItem }) => {
  const [itemName, setItemName] = useState("");
  const [expirationDate, setExpirationDate] = useState("n/a");
  const [whoRequested, setWhoRequested] = useState("n/a");
  const [whereToBuy, setWhereToBuy] = useState("n/a");
  const [quantity, setQuantity] = useState("n/a");
  const [quantityUnits, setQuantityUnits] = useState("n/a");
  const [itemType, setItemType] = useState("n/a");
  const [image, setImage] = useState("n/a");
  const [list, setList] = useState("Items to Buy");

  const handleClick = (e) => {
    e.preventDefault();
    if (!itemName) return;
    list === "Items to Buy"
      ? addBuyItem({
          itemName: itemName,
          expiryDate: expirationDate,
          itemType: itemType,
          whoRequested: whoRequested,
          whereToBuy: whereToBuy,
          quantity: quantity,
          quantityUnits: quantityUnits,
          imageLink: image,
          whichList: list,
          checked: false,
          id: 7,
        })
      : addOwnedItem({
          itemName: itemName,
          expiryDate: expirationDate,
          itemType: itemType,
          quantity: quantity,
          quantityUnits: quantityUnits,
          imageLink: image,
          whichList: list,
          checked: false,
          id: 8,
        });
  };
  return (
    <Accordion defaultActiveKey="0" className="AddItem">
      <Card className="border-0">
        <Card.Header className="bg-secondary w-100 d-flex justify-content-between">
          <Accordion.Toggle
            className="border-0 bg-transparent"
            as={Button}
            eventKey="0"
          >
            <h5 className="accordion-header text-dark p-1">Add Item</h5>
          </Accordion.Toggle>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="accordion-header text-dark px-4 border-0 border-end border-1 border-dark bg-transparent"
              onClick={() => setList("Owned Items")}
            >
              Add Owned Item
            </button>
            <button
              type="button"
              className="accordion-header text-dark px-4 border-0 bg-transparent"
              onClick={() => setList("Items to Buy")}
            >
              Add Item to Buy
            </button>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="add-item-form bg-info border-success">
            <div className="p-4 container-fluid m-0">
              <form className="row gx-5">
                <div className="col">
                  <div className="d-flex question-border rounded mb-4">
                    <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                      Item Name
                    </h5>
                    <input
                      className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                      type="text"
                      placeholder="Frosted Flakes Cereal"
                      onChange={(e) => {
                        setItemName(e.target.value);
                      }}
                      required
                    />
                  </div>

                  {list === "Owned Items" && (
                    <div className="d-flex question-border rounded mb-4">
                      <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                        Expiration Date
                      </h5>
                      <input
                        className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                        type="date"
                        placeholder="10-28-21"
                        onChange={(e) => {
                          setExpirationDate(e.target.value);
                        }}
                      />
                    </div>
                  )}

                  {list === "Items to Buy" && (
                    <div className="d-flex question-border rounded mb-4">
                      <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                        Date Needed By
                      </h5>
                      <input
                        className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                        type="date"
                        placeholder="10-28-21"
                        onChange={(e) => {
                          setExpirationDate(e.target.value);
                        }}
                      />
                    </div>
                  )}

                  <div className="d-flex question-border rounded mb-4">
                    <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                      Type
                    </h5>
                    <input
                      className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                      type="text"
                      placeholder="snack"
                      onChange={(e) => {
                        setItemType(e.target.value);
                      }}
                    />
                  </div>

                  {list === "Items to Buy" && (
                    <div className="d-flex question-border rounded mb-4">
                      <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                        Who Requested
                      </h5>
                      <input
                        className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                        type="text"
                        placeholder="Bob"
                        onChange={(e) => {
                          setWhoRequested(e.target.value);
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="col">
                  <div className="d-flex question-border rounded mb-4">
                    <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                      Quantity
                    </h5>
                    <input
                      className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                      type="number"
                      placeholder="2"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                  </div>

                  <div className="d-flex question-border rounded mb-4">
                    <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                      Quantity Units
                    </h5>
                    <input
                      className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                      type="text"
                      placeholder="boxes"
                      onChange={(e) => {
                        setQuantityUnits(e.target.value);
                      }}
                    />
                  </div>

                  <div className="d-flex question-border rounded mb-4">
                    <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                      Image Link
                    </h5>
                    <input
                      className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                      type="text"
                      placeholder="google.com"
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                  </div>

                  {list === "Items to Buy" && (
                    <div className="d-flex question-border rounded mb-4">
                      <h5 className="addInfo d-inline p-2 mb-0 text-white w-50 bg-warning">
                        Where To Buy
                      </h5>
                      <input
                        className="d-inline p-2 bg-white text-dark border-1 w-50 border-light form-control"
                        type="text"
                        placeholder="Safeway"
                        onChange={(e) => {
                          setWhereToBuy(e.target.value);
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-outline-warning bg-white w-75"
                    onClick={handleClick}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AddItemForm;
