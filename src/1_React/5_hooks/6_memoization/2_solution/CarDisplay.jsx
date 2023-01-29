import React, { Profiler, memo } from 'react';

// === Concept
// (memo) = (memoize) component
// Does not re-render component if the (props) are the same from previous render
// Re-render will occur if the component (state) or (context) are changed

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
