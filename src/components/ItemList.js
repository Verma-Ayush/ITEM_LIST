import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default function ItemList({ currItems, setcurrItems, setitemRef }) {
  const deleteItem = (elem) => {
    const newitems = currItems.filter((currElem) => {
      return currElem.id !== elem.id;
    });
    setcurrItems(() => {
      return newitems;
    });

    setitemRef(null);
    document.querySelector(".input-field").value = "";
  };

  const editItem = (elem) => {
    document.querySelector(".input-field").value = elem.textvalue;
    document.querySelector(".input-field").focus();
    setitemRef(elem.id);
  };
  return (
    <div className="item-box">
      <ul className="item-list">
        {currItems.map((currElem) => {
          return (
            <li key={Date.now() + Math.random()}>
              <span>{currElem.textvalue}</span>
              <span>
                <FontAwesomeIcon
                  icon={faBomb}
                  className="icons"
                  onClick={() => {
                    deleteItem(currElem);
                  }}
                />
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="icons"
                  onClick={() => {
                    editItem(currElem);
                  }}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
