import React, { useState, useRef, useEffect } from "react";

const Car = () => {
  // Concept:
  // useRef(defaultValue) creates object with current prop (ref.current)
  // useRef can be used to create connections between logic and DOM
  const [car, setCar] = useState("Evo");
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = car;
    console.log(prevValue.current);
  }, [car]);

  return (
    <div className="Car">
      <h1>Car is {car}</h1>

      <input ref={inputRef} onChange={event => setCar(event.target.value)} />
      <button onClick={() => inputRef.current.focus()}>Focus on input</button>

      <p>Previous Value: {prevValue.current}</p>
    </div>
  );
};

export default Car;
