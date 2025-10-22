import InventoryItem from "./InventoryItem";

const InventoryList = ({ rows, remove }) => {
  return (
    <div className="col p-4 bg-white text-dark">
      <h2>Inventory:</h2>
      <div className="d-flex flex-column py-4 px-3 bg-white text-light w-100">
        <div className="border-top border-1">
          {rows.map((row, idx) => (
            <InventoryItem row={row} key={idx} remove={remove} />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <a href="#top" className="btn text-dark bg-primary w-50">
          Scroll Up
        </a>
      </div>
    </div>
  );
};

export default InventoryList;
