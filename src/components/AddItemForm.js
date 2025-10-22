import { useState } from "react";
import InventoryForm from "./InventoryForm";
import BuyForm from "./BuyForm";

const AddItemForm = ({ addInventoryItem, addBuyItem }) => {
  const [list, setList] = useState("Inventory");

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2
          className="accordion-header bg-secondary w-100 d-flex justify-content-between border-bottom border-1"
          id="panelsStayOpen-headingOne"
        >
          <button
            className="accordion-button bg-transparent w-25 text-dark p-3 ps-5 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Add Item
          </button>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="text-dark px-4 border-0 border-end border-1 border-dark bg-transparent btn rounded-0"
              onClick={() => setList("Inventory")}
            >
              Add Inventory Item
            </button>
            <button
              type="button"
              className="text-dark px-4 border-0 bg-transparent btn"
              onClick={() => setList("Items to Buy")}
            >
              Add Item to Buy
            </button>
          </div>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body p-4 container-fluid m-0 add-item-form bg-info border-success">
            {list === "Inventory" ? (
              <InventoryForm
                addInventoryItem={addInventoryItem}
                list={list}
              ></InventoryForm>
            ) : (
              <BuyForm addBuyItem={addBuyItem} list={list}></BuyForm>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;
