import React, { useState } from 'react';

function Car() {
  // === Concept
  // const [var, updVarFunc] = useState(defaultValue);
  // each state update = (re)render
  const [carState, setCarState] = useState('Evo 9');

  return (
    <div className="Car">
      <h3>Select only one Car</h3>
      <button
        type="button"
        onClick={(event) => {
          setCarState(event.target.outerText);
        }}
      >
        Toyota Supra
      </button>
      <button
        type="button"
        onClick={(event) => {
          setCarState(event.target.outerText);
        }}
      >
        Nissan Silvia
      </button>
      <button
        type="button"
        onClick={(event) => {
          setCarState(event.target.outerText);
        }}
      >
        Evo
      </button>
      <p>
        You selected
        {carState}
      </p>
    </div>
  );
}

export default Car;
