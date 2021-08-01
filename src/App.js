import AddItemForm from "./components/AddItemForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import BuyList from "./components/BuyList";

import firebase from "firebase/app";
import "firebase/firestore";
import React, { useState, useEffect } from "react";

firebase.initializeApp({
  apiKey: "AIzaSyCcqYWL-FcqBwUG0KP-DUmu6tKQZRFdWMY",
  authDomain: "food-tracker-2a158.firebaseapp.com",
  projectId: "food-tracker-2a158",
  storageBucket: "food-tracker-2a158.appspot.com",
  messagingSenderId: "242734370264",
  appId: "1:242734370264:web:e194ec5ba25879226236ad",
  measurementId: "G-SSZ9G41G5K",
});
const firestore = firebase.firestore();
const firebaseInvList = firestore.collection("InventoryList");
const firebaseBuyList = firestore.collection("BuyList");

firebaseInvList.get();
firebaseBuyList.get();

const App = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [buyList, setBuyList] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("InventoryList")
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          date: doc.data().date.toDate().toDateString().substring(4, 15),
        }));
        setInventoryList(list);
      });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("BuyList")
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBuyList(list);
      });
    return () => unsubscribe();
  }, []);

  const removeInvItem = (id) => {
    firebaseInvList
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const removeBuyItem = (id) => {
    firebaseBuyList
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div>
      <div className="sticky-top">
        <Header />
        <AddItemForm />
      </div>
      <div className="row line-split">
        <InventoryList rows={inventoryList} remove={removeInvItem} />
        <BuyList rows={buyList} remove={removeBuyItem} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
