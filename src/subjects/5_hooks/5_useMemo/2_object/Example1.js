import React, { useState, useMemo, useEffect } from "react";

function complexComputeFunc(number) {
  let i = 0;

  while (i < 1000000000) {
    i++;
  }

  return number * 2;
}

const Example1 = () => {
  const [number, setNumber] = useState(1);
  const [colored, setColored] = useState(false);

  // update (compute) when (number) is changed
  const compute = useMemo(() => {
    return complexComputeFunc(number);
  }, [number]);

  // update (style) when (colored) is changed
  const style = useMemo(() => {
    return {
      color: colored ? "red" : "black",
    };
  }, [colored]);

  // const style2 = {
  //   color: colored ? "red" : "black",
  // };

  // console.log(style === style2);

  useEffect(() => {
    console.log("style changed");
  }, [style]);

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

export default Example1;
