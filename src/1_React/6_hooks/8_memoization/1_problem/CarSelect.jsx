import React, { Profiler } from 'react';

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
export default CarSelect;
