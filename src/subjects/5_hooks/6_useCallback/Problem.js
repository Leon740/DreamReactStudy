import React, { useState } from "react";
import ItemsList from "./ItemsList";

const Problem = () => {
  // === Concept
  // === Problem
  // 1) each time (colored) is updated goes (re)render
  // 2) each (re)render calls (generateItemsFromAPI)
  // === Solution
  // useCallback(() => {}, [])
  // (useCallback) returns callback which will be called when dependencies array is changed
  // Note: (useMemo) returns value, (useCallback) returns callback
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const titleStyles = { color: colored ? "red" : "black" };

  const generateItemsFromAPI = sumNumber => {
    return new Array(count)
      .fill("")
      .map((_, index) => `Element ${index + sumNumber}`);
  };

  return (
    <div>
      <h1 style={titleStyles}>Elements quantity : {count}</h1>

      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            setCount(prev => prev + 1);
          }}
        >
          Add
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            setColored(prev => !prev);
          }}
        >
          Change title color
        </button>
      </div>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default Problem;
