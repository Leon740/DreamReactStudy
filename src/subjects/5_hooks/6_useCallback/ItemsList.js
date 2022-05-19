/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("render");

    const newItems = getItems(3);

    setItems(newItems);
  }, [getItems]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemsList;
