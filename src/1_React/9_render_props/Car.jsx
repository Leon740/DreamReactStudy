import React from 'react';
import PropTypes from 'prop-types';

function Car({ favoriteCar }) {
  return (
    <div>
      <p>
        My
        {' '}
        <b>Dream</b>
        {' '}
        is
        {' '}
        <u>Lancer Evo</u>
      </p>
      {favoriteCar()}
    </div>
  );
}

Car.propTypes = {
  favoriteCar: PropTypes.func.isRequired,
};

export default Car;
