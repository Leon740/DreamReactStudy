import React, { useState, useMemo } from "react";

function complexComputeFunc(number) {
  let i = 0;

  while (i < 1000000000) {
    i++;
  }

  return number * 2;
}

const Solution = () => {
  // === Concept
  // === Problem
  // 1) each time we change (colored) we call a (re)render
  // 2) each render calls the whole logic of the Component
  // 3) so (complexComputeFunc) is called on each (re)render and this causes a delay for (style) update
  // === Solution
  // useMemo(() => {}, [])
  // (useMemo) returns the (result of the callback)=(value) which will be called when dependencies array is changed
  // (useMemo) caches the callback passed to it
  const [number, setNumber] = useState(1);
  const [colored, setColored] = useState(false);

  // update (compute) when (number) is changed
  const compute = useMemo(() => {
    return complexComputeFunc(number);
  }, [number]);

  const style = {
    color: colored ? "red" : "black",
  };

  return (
    <div>
      <h1 style={style}>Calculated number : {compute}</h1>

      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            setNumber(prev => prev + 1);
          }}
        >
          Add
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setNumber(prev => prev - 1);
          }}
        >
          Remove
        </button>
      </div>

      <div>
        <button
          className="btn btn-warning"
          onClick={() => {
            setColored(prev => !prev);
          }}
        >
          Update title color
        </button>
      </div>
    </div>
  );
};

export default Solution;
