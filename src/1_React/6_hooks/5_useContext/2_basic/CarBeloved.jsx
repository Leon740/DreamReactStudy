import React, { useContext } from 'react';
import CarContext from './CarContext';

function CarBeloved() {
  const { car } = useContext(CarContext);

  return (
    <div>
      My
      {' '}
      <u>Beloved</u>
      {' '}
      Car is
      {' '}
      <b>{car}</b>
    </div>
  );
}

export default CarBeloved;
