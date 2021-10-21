import React, { useState } from "react";
import ItemInput from "./components/ItemInput";
import Head from "./components/Head";
import ItemList from "./components/ItemList";

export default function Todo() {
  const [currItems, setcurrItems] = useState([]);
  const [itemRef, setitemRef] = useState(null);

  const AddItem = () => {
    const inputfield = document.querySelector(".input-field").value;
    if (inputfield.length === 0) {
      alert("Please Add Item Name First");
      return;
    }
    document.querySelector(".input-field").value = "";
    if (itemRef === null) {
      setcurrItems(() => {
        return [
          ...currItems,
          { textvalue: inputfield, id: Date.now() + Math.random() },
        ];
      });
    } else {
      const newItems = currItems.map((currElem) => {
        if (currElem.id === itemRef) {
          return { textvalue: inputfield, id: Date.now() + Math.random() };
        } else return currElem;
      });
      setcurrItems(newItems);
      setitemRef(null);
    }
  };

  return (
    <div className="Todo">
      <Head />
      <ItemInput AddItem={AddItem} />
      <ItemList
        currItems={currItems}
        setcurrItems={setcurrItems}
        setitemRef={setitemRef}
      />
    </div>
  );
}
