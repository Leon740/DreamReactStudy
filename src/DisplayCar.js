import React from 'react';
import PropTypes from 'prop-types';

const DisplayCar = ({ car }) => {
  return (
    <p>My Dream Car is <b>{car}</b></p>
  );
}

DisplayCar.propTypes = {
  car: PropTypes.string.isRequired,
};

export default DisplayCar;
