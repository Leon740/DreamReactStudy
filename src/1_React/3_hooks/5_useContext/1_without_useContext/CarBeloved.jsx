import React from 'react';
import CarContext from './CarContext';

function CarBeloved() {
  return (
    <CarContext.Consumer>
      {({ car }) => (
        <div>
          My
          {' '}
          <u>Beloved</u>
          {' '}
          Car is
          {' '}
          <b>{car}</b>
        </div>
      )}
    </CarContext.Consumer>
  );
}

export default CarBeloved;
