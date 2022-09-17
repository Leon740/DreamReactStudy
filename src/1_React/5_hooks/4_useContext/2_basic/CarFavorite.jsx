import React, { useContext } from 'react';
import CarContext from './CarContext';

function CarFavorite() {
  const { car } = useContext(CarContext);

  return (
    <div>
      My
      {' '}
      <u>Favorite</u>
      {' '}
      Car is
      {' '}
      <b>{car}</b>
    </div>
  );
}

export default CarFavorite;
