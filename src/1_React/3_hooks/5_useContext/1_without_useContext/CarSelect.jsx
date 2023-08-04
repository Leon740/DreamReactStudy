import React from 'react';
import CarContext from './CarContext';

function CarDream() {
  return (
    <CarContext.Consumer>
      {({ changeCar }) => (
        <div className="mb-3">
          <input onChange={(event) => changeCar(event.target.value)} />
        </div>
      )}
    </CarContext.Consumer>
  );
}

export default CarDream;
