import React, { useState } from "react";

const Car = () => {
  const [carsState, setCarsState] = useState("Civic");

  return (
    <div className="Car">
      {/* concept: updVarFunc(previousValue => previousValue + newValue) */}
      <h3>Select multiple Cars</h3>
      <button
        onClick={event => {
          setCarsState(prev => prev + ", " + event.target.outerText);
        }}
      >
        Toyota Supra
      </button>
      <button
        onClick={event => {
          setCarsState(prev => prev + ", " + event.target.outerText);
        }}
      >
        Nissan Silvia
      </button>
      <button
        onClick={event => {
          setCarsState(prev => prev + ", " + event.target.outerText);
        }}
      >
        Evo
      </button>

      <p>You selected {carsState}</p>
    </div>
  );
};

export default Car;
