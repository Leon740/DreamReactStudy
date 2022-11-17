import React from 'react';

function CarDisplay({ car = 'BMW M4 Coupe' }) {
  return (
    <div>
      My car is
      {' '}
      <div>{car}</div>
    </div>
  );
}

export default CarDisplay;
