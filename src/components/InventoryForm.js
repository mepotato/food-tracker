import { useState } from "react";
import firebase from "firebase/app";

const InventoryForm = () => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("InventoryList")
      .add({
        title,
        quantity,
        location,
        tags: [tags],
        date: new Date(date),
        imageLink: image,
        description,
      })

      .then(() => {
        setTitle("");
        setDate(new Date());
        setQuantity(0);
        setLocation("");
        setTags("");
        setImage("");
        setDescription("");
      });
  };

  return (
    <form id="form" className="row gx-5" onSubmit={handleClick}>
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
            value={title}
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
            value={quantity}
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
            value={location}
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
            value={tags}
          />
        </div>

        <div className="d-flex border border-warning mb-4">
          <h5 className="addInfo p-2 mb-0 text-dark bg-white border-end border-1 border-warning">
            Date
          </h5>
          <input
            className="d-inline p-2 bg-white text-dark border-1 border-light form-control"
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
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
            value={image}
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
            value={description}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn text-white bg-danger px-5"
          form="form"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InventoryForm;
