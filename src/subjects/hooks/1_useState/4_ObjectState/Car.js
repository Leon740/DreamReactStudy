import React from "react";
import Problem from "./Problem";
import Solution from "./Solution";

const Car = () => {
  // === Concept
  // === Problem
  // when we have object in useState() and we need to update some values = the whole object is being updated
  // === Solution
  // use previous value, and put the new value
  return (
    <div className="Car">
      <Problem />
      <Solution />
    </div>
  );
};

export default Car;
