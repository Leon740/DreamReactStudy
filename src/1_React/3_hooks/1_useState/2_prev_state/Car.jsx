import React, { useState } from 'react';

function Car() {
  const [carsState, setCarsState] = useState('Civic');

  return (
    <div className="Car">
      {/* === Concept: updVarFunc(previousValue => previousValue + newValue) */}
      <h3>Select multiple Cars</h3>
      <button
        type="button"
        onClick={(event) => {
          setCarsState((prev) => `${prev}, ${event.target.outerText}`);
        }}
      >
        Toyota Supra
      </button>
      <button
        type="button"
        onClick={(event) => {
          setCarsState((prev) => `${prev}, ${event.target.outerText}`);
        }}
      >
        Nissan Silvia
      </button>
      <button
        type="button"
        onClick={(event) => {
          setCarsState((prev) => `${prev}, ${event.target.outerText}`);
        }}
      >
        Evo
      </button>

      <p>You selected {carsState}</p>
    </div>
  );
}

export default Car;
