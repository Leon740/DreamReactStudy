import React from "react";
import Problem from "./Problem";
import Solution from "./Solution";

const Component = () => {
  // Concept:
  // Problem:
  // 1) each time (colored) is updated goes (re)render
  // 2) each (re)render calls (generateItemsFromAPI)
  // Solution:
  // useCallback(() => {}, [])
  // (useCallback) returns callback which will be called when dependencies array is changed
  // Note: (useMemo) returns value, (useCallback) returns callback
  return (
    <div>
      <Problem />
      <Solution />
    </div>
  );
};

export default Component;
