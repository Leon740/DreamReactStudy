import React from 'react';
import CarContext from './CarContext';

function CarDream() {
  return (
    <CarContext.Consumer>
      {({ car }) => (
        <div>
          My
          {' '}
          <u>Dream</u>
          {' '}
          Car is
          {' '}
          <b>{car}</b>
        </div>
      )}
    </CarContext.Consumer>
  );
}

export default CarDream;
