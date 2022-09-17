/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('render');

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
}

export default ItemsList;
