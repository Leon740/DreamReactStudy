import React from 'react';
import PropTypes from 'prop-types';

function CarAvailability(props) {
  const { name, inStock } = props;

  return (
    <p>
      <b>{name}</b> {inStock ? 'is' : 'is not'} in Stock
    </p>
  );
}

CarAvailability.propTypes = {
  name: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired
};

function Car() {
  return (
    <div>
      <CarAvailability name="Toyota Supra" inStock />
      <CarAvailability name="Toyota Supra" inStock={false} />
    </div>
  );
}

export default Car;
