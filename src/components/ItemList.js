import Item from "./Item";

const ItemList = ({ rows, setRows, title }) => {
  // const handleClick = () => {
  //   rows.forEach((row) => console.log(row.id, row.checked));
  // };

  const temp = (id) => {
    console.log(id);
    const filteredRows = rows.filter((row) => {
      return row.id !== id;
    });
    setRows(filteredRows);
  };

  // const temp = (checked, sec) => {
  //   console.log(checked, sec);
  //   // {
  //   //   rows.map((row) => {
  //   //     row.id === sec && row.checked = checked;
  //   //   });
  //   // }
  // };

  return (
    <div className="col p-4 bg-white text-dark">
      <h2>{title}:</h2>
      <div className="d-flex flex-column p-4 bg-white text-light w-100">
        {rows.map((row, idx) => (
          <Item row={row} key={idx} handleCheckbox={temp} />
        ))}
      </div>
      <div className="d-flex justify-content-around">
        <a href="#" className="btn text-dark bg-primary w-50">
          Scroll Up
        </a>
        {/* <button
          type="button"
          className="btn text-light bg-primary text-dark w-25"
        >
          Transfer
        </button>
        <button
          type="button"
          className="btn text-light bg-danger w-25"
          onClick={handleClick}
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default ItemList;
