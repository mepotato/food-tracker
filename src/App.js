import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

const App = () => {
  const [ownedInfo, setOwnedInfo] = useState([
    {
      itemName: "a item owned",
      expiryDate: "1-1-22",
      itemType: "food",
      quantity: "2",
      quantityUnits: "boxes",
      imageLink: "google.com",
      whichList: "Owned Items",
      checked: false,
      id: 1,
    },
    {
      itemName: "b item owned",
      expiryDate: "2-2-23",
      itemType: "drink",
      quantity: "2",
      quantityUnits: "boxes",
      imageLink: "google.com",
      whichList: "Owned Items",
      checked: false,
      id: 2,
    },
    {
      itemName: "c item owned",
      expiryDate: "3-3-24",
      itemType: "ramen",
      quantity: "2",
      quantityUnits: "boxes",
      imageLink: "google.com",
      whichList: "Owned Items",
      checked: false,
      id: 3,
    },
  ]);

  const [buyInfo, setBuyInfo] = useState([
    {
      itemName: "a item to buy",
      expiryDate: "1-1-22",
      itemType: "ramen",
      whoRequested: "asdf",
      whereToBuy: "safeway",
      quantity: "2",
      quantityUnits: "boxes",
      imageLink: "google.com",
      whichList: "Items to Buy",
      checked: false,
      id: 4,
    },
    {
      itemName: "b item to buy",
      expiryDate: "2-2-23",
      itemType: "food",
      whoRequested: "asdf",
      whereToBuy: "safeway",
      quantity: "2",
      quantityUnits: "boxes",
      imageLink: "google.com",
      whichList: "Items to Buy",
      checked: false,
      id: 5,
    },
    {
      itemName: "c item to buy",
      expiryDate: "3-3-24",
      itemType: "drink",
      whoRequested: "asdf",
      whereToBuy: "safeway",
      quantity: "2",
      quantityUnits: "boxes",
      imageLink: "google.com",
      whichList: "Items to Buy",
      checked: false,
      id: 6,
    },
  ]);

  const addOwnedItem = (item) => {
    setOwnedInfo([...ownedInfo, item]);
  };

  const addBuyItem = (item) => {
    setBuyInfo([...buyInfo, item]);
  };

  // const handleCheckbox = ()

  return (
    <div>
      <div className="sticky-top">
        <Header />
        <AddItemForm addOwnedItem={addOwnedItem} addBuyItem={addBuyItem} />
      </div>
      <div className="row line-split">
        <ItemList
          rows={ownedInfo}
          setRows={setOwnedInfo}
          // handleCheckbox={handleCheckbox}
          title="Items Owned"
        />
        <ItemList rows={buyInfo} setRows={setBuyInfo} title="Items to Buy" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
