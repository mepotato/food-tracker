import { useState } from "react";

const BuyForm = ({ addBuyItem, list }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("n/a");
  const [location, setLocation] = useState("n/a");
  const [tags, setTags] = useState("n/a");
  const [person, setPerson] = useState("n/a");
  const [image, setImage] = useState("n/a");
  const [description, setDescription] = useState("n/a");

  const handleClick = (e) => {
    e.preventDefault();
    if (!title) return;
    addBuyItem({
      id: Math.random(),
      title: title,
      quantity: quantity,
      location: location,
      tags: tags,
      person: person,
      imageLink: image,
      description: description,
    });
  };

  return (
    <form className="row gx-5">
      <div className="col">
        <div className="d-flex border border-warning mb-4">
          <h5 className="addInfo p-2 mb-0 text-dark bg-white border-end border-1 border-warning">
            Title
          </h5>
          <input
            className="d-inline p-2 bg-white text-dark border-1 border-light form-control"
            type="text"
            placeholder="ex: Frosted Flakes Cereal"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>

        <div className="d-flex border border-warning mb-4">
          <h5 className="addInfo p-2 mb-0 text-dark bg-white border-end border-1 border-warning">
            Quantity
          </h5>
          <input
            className="d-inline p-2 bg-white text-dark border-1 border-light form-control"
            type="number"
            placeholder="ex: 4, 2"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <div className="d-flex border border-warning mb-4">
          <h5 className="addInfo p-2 mb-0 text-dark bg-white border-end border-1 border-warning">
            Location
          </h5>
          <input
            className="d-inline p-2 bg-white text-dark border-1 border-light form-control"
            type="text"
            placeholder="ex: outside fridge, Safeway"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="col">
        <div className="d-flex border border-warning mb-4">
          <h5 className="addInfo p-2 mb-0 text-dark bg-white border-end border-1 border-warning">
            Tags
          </h5>
          <input
            className="d-inline p-2 bg-white text-dark border-1 border-light form-control"
            type="text"
            placeholder="ex: snack, drink"
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </div>

        <div className="d-flex border border-warning mb-4">
          <h5 className="addInfo p-2 mb-0 text-dark bg-white border-end border-1 border-warning">
            Person
          </h5>
          <input
            className="d-inline p-2 bg-white text-dark border-1 border-light form-control"
            type="text"
            placeholder="ex: Nicole"
            onChange={(e) => {
              setPerson(e.target.value);
            }}
          />
        </div>

        <div className="d-flex border border-warning mb-4">
          <h5 className="addInfo p-2 mb-0 text-dark bg-white border-end border-1 border-warning">
            Link
          </h5>
          <input
            className="d-inline p-2 bg-white text-dark border-1 border-light form-control"
            type="text"
            placeholder="ex: google.com"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <div className="d-flex border border-warning mb-4">
          <h5 className="addInfo p-2 mb-0 text-dark bg-white border-end border-1 border-warning">
            Description
          </h5>
          <input
            className="d-inline p-2 bg-white text-dark border-1 border-light form-control"
            type="textarea"
            placeholder="ex: buy as early as possible"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn text-white bg-danger px-5"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BuyForm;