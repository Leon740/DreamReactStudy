import React from 'react';
import CarContext from './CarContext';

function CarFavorite() {
  return (
    <CarContext.Consumer>
      {({ car }) => (
        <div>
          My
          {' '}
          <u>Favorite</u>
          {' '}
          Car is
          {' '}
          <b>{car}</b>
        </div>
      )}
    </CarContext.Consumer>
  );
}

export default CarFavorite;
