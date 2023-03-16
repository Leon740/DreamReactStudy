import React, { Profiler, memo } from 'react';

// === Concept
// (memo) = (memoize) component
// Does not re-render component if the (props) are the same from previous render
// Re-render will occur if the component (state) or (context) are changed

function CarSelect({ onChange }) {
  const CARS = ['BMW', 'Audi', 'Evo'];

  function fnOnRender(id, phase) {
    console.error(`${id} ${phase}`);
  }

  return (
    <Profiler id="CarSelect" onRender={(id, phase) => fnOnRender(id, phase)}>
      <div className="mb-5">
        <select onChange={(event) => onChange(event.target.value)}>
          <option>Select car</option>
          {CARS.map((carItem, index) => <option key={index}>{carItem}</option>)}
        </select>
      </div>
    </Profiler>
  );
}
export default memo(CarSelect);
