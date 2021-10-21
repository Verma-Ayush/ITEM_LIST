import React from "react";

export default function ItemInput({ AddItem }) {
  return (
    <div className="input-box">
      <input className="input-field" type="text" placeholder="Add Item..." />
      <button className="Add" onClick={AddItem}>
        Add
      </button>
    </div>
  );
}
