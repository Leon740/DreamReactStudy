import React, { useState } from 'react';
import CarDisplay from './CarDisplay';
import CarSelect from './CarSelect';

function CarMain() {
  const [stCar, setStCar] = useState('BMW M4 Coupe');

  return (
    <div>
      <CarDisplay car={stCar} />
      <CarSelect value={stCar} onChange={setStCar} />
    </div>
  );
}

export default CarMain;
