import React, { useState } from 'react';

// === Concept
// render-prop is a prop, function with own render-method
// So, instead of making render method in the component itself, we use render-props to define render-methods

function CarInput({ car, setCarFn }) {
  return <input type="text" value={car} onChange={(event) => setCarFn(event.target.value)} />;
}
function CarDisplay({ car, renderCar }) {
  return renderCar(car);
}
export default function Car() {
  const [carSt, setCarSt] = useState('Lancer Evo');
  return (
    <>
      <CarInput car={carSt} setCarFn={setCarSt} />
      <CarDisplay car={carSt} renderCar={(car) => <p>My dream car is {car}</p>} />
    </>
  );
}
