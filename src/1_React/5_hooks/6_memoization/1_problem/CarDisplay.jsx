import React, { Profiler } from 'react';

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
export default CarDisplay;
