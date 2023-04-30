import React, { Profiler, memo } from 'react';

// === Concept
// === Problem
// 1) if the (parent) component re-renders, all of the children components re-render
// Even if (ThemeToggler) comp. props are the same as they were in the previous render
// === Solution
// 1) memo = (memoize) component
// 2) memo is a function which returns a comp.
// 3) The important & basic rule is that if the component props are the same as they were in the previous render, the comp. will no re-render
// 4) Re-render will occur only if the component (state) or (context) are changed

function CarDisplay({ car }) {
  function fnOnRender(id, phase) {
    console.error(`${id} ${phase}`);
  }

  return (
    <Profiler id="CarDisplay" onRender={(id, phase) => fnOnRender(id, phase)}>
      <div className="mb-5">
        <p>car is </p>
        <h2>{car}</h2>
      </div>
    </Profiler>
  );
}
export default memo(CarDisplay);
