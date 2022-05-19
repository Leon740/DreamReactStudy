import React, { useEffect, useMemo, useState } from "react";

const Example2 = () => {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  // === Concept
  // === Problem
  // const titleStyles = {
  //   color: colored ? "red" : "black",
  // };
  // 1) each time we update (count) goes a (re)render
  // each (re)render updates (titleStyles)
  // === Solution

  // update (titleStyles) only if (colored) is changes
  const titleStyles = useMemo(() => {
    return {
      color: colored ? "red" : "black",
    };
  }, [colored]);

  useEffect(() => {
    console.log("render");
  }, [titleStyles]);

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
    </div>
  );
};

export default Example2;
