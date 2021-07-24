import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import BuyList from "./components/BuyList";

const App = () => {
  const [inventoryInfo, setInventoryInfo] = useState([
    {
      id: Math.random(),
      title: "a item owned",
      quantity: "4",
      location: "outside refridgerator",
      tags: "food",
      date: "1-1-22",
      image: "google.com",
      description:
        "a rnasoei fjsaoeifjseoifsaodlkf sas seoia jso fjsoaifs fjsalefj slfspef isjefp asijfpsojf sepfj sipsof jsof jsaofijs psjf poaskf ope",
      whichList: "Inventory",
    },
    {
      id: Math.random(),
      title: "b item owned",
      quantity: "2",
      location: "inside refridgerator",
      tags: "drink",
      date: "2-2-33",
      image: "google.com",
      description:
        "a rnasoei fjsaoeifjseoifsaodlkf sas seoia jso fjsoaifs fjsalefj slfspef isjefp asijfpsojf sepfj sipsof jsof jsaofijs psjf poaskf ope",
      whichList: "Inventory",
    },
    {
      id: Math.random(),
      title: "c item owned",
      quantity: "3",
      location: "kitchen table",
      tags: "ramen",
      date: "3-3-44",
      image: "google.com",
      description:
        "a rnasoei fjsaoeifjseoifsaodlkf sas seoia jso fjsoaifs fjsalefj slfspef isjefp asijfpsojf sepfj sipsof jsof jsaofijs psjf poaskf ope",
      whichList: "Inventory",
    },
  ]);

  const [buyInfo, setBuyInfo] = useState([
    {
      id: Math.random(),
      title: "a item owned",
      quantity: "4",
      location: "Walmart",
      tags: "ramen",
      person: "Nicole",
      image: "google.com",
      description:
        "a rnasoei fjsaoeifjseoifsaodlkf sas seoia jso fjsoaifs fjsalefj slfspef isjefp asijfpsojf sepfj sipsof jsof jsaofijs psjf poaskf ope",
      whichList: "Inventory",
    },
    {
      id: Math.random(),
      title: "b item owned",
      quantity: "2",
      location: "Safeway",
      tags: "food",
      person: "Michelle",
      image: "google.com",
      description:
        "a rnasoei fjsaoeifjseoifsaodlkf sas seoia jso fjsoaifs fjsalefj slfspef isjefp asijfpsojf sepfj sipsof jsof jsaofijs psjf poaskf ope",
      whichList: "Inventory",
    },
    {
      id: Math.random(),
      title: "c item owned",
      quantity: "3",
      location: "Costco",
      tags: "drink",
      person: "Jacky",
      image: "google.com",
      description:
        "a rnasoei fjsaoeifjseoifsaodlkf sas seoia jso fjsoaifs fjsalefj slfspef isjefp asijfpsojf sepfj sipsof jsof jsaofijs psjf poaskf ope",
      whichList: "Inventory",
    },
  ]);

  const addInventoryItem = (item) => {
    setInventoryInfo([...inventoryInfo, item]);
  };

  const addBuyItem = (item) => {
    setBuyInfo([...buyInfo, item]);
  };

  // const handleCheckbox = ()

  return (
    <div>
      <div className="sticky-top">
        <Header />
        <AddItemForm
          addInventoryItem={addInventoryItem}
          addBuyItem={addBuyItem}
        />
      </div>
      <div className="row line-split">
        <InventoryList
          rows={inventoryInfo}
          setRows={setInventoryInfo}
          title="Inventory"
        />
        <BuyList rows={buyInfo} setRows={setBuyInfo} title="Items to Buy" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
