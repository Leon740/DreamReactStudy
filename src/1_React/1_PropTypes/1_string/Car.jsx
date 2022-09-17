import React from 'react';
import PropTypes from 'prop-types';

function FavoriteCar({ car }) {
  return (
    <p>
      My
      {' '}
      <b>Favorite</b>
      {' '}
      Car is
      {' '}
      <u>{car}</u>
    </p>
  );
}

FavoriteCar.propTypes = {
  car: PropTypes.string.isRequired,
};

function Car() {
  return (
    <div>
      <FavoriteCar car="Evo 9" />
    </div>
  );
}

export default Car;
