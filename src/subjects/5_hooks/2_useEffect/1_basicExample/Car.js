import React, { useState, useEffect } from "react";

const Car = () => {
  const [carState, setCarState] = useState("Honda");

  // useEffect(() => {
  //   // called after each render
  //   console.log("render");
  // });

  // useEffect(() => {
  //   // called only once on initial render
  //   console.log("render");
  // }, []);

  useEffect(() => {
    // [dependencies] = called when carState is changed
    console.log("render");
  }, [carState]);

  return (
    <div className="Car">
      <p>Car is: {carState}</p>
      <button onClick={event => setCarState(event.target.outerText)}>
        Mitsubishi
      </button>
      <button onClick={event => setCarState(event.target.outerText)}>
        Toyota
      </button>
      <button onClick={event => setCarState(event.target.outerText)}>
        Nissan
      </button>
    </div>
  );
};

export default Car;
