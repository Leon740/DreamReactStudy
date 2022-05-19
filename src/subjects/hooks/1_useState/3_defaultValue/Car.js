import React, { useState } from "react";

const Car = () => {
  const getDefaultCar = () => {
    console.log("proccessing...");

    return "Evo 9";
  };

  // === Concept
  // === Problem
  // each state update = render, each render calls getDefaultCar()
  // === Solution
  // callback in useState = find default value once, and don't call it on rerenders
  const [carState, setCarState] = useState(() => {
    getDefaultCar();
  });

  return (
    <div className="Car">
      <h3>Select only one Car</h3>
      <button
        onClick={event => {
          setCarState(event.target.outerText);
        }}
      >
        Toyota Supra
      </button>
      <button
        onClick={event => {
          setCarState(event.target.outerText);
        }}
      >
        Nissan Silvia
      </button>
      <button
        onClick={event => {
          setCarState(event.target.outerText);
        }}
      >
        Evo
      </button>
      <p>You selected {carState}</p>
    </div>
  );
};

export default Car;
