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
  // eslint-disable-next-line react/forbid-prop-types
  car: PropTypes.any.isRequired,
};

function Car() {
  return (
    <div>
      <FavoriteCar car="Evo 9" />
    </div>
  );
}

export default Car;
