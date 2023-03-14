import React, { useContext } from 'react';
import CarContext from './CarContext';

function CarSelect() {
  const { changeCar } = useContext(CarContext);

  console.log(useContext(CarContext));

  return (
    <div className="mb-3">
      <input onChange={(event) => changeCar(event.target.value)} />
    </div>
  );
}

export default CarSelect;
