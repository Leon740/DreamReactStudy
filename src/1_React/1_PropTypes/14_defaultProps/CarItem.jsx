import React from 'react';
import PropTypes from 'prop-types';

function CarItem({ car }) {
  const { name, model, year } = car;

  return (
    <tr>
      <td>{name}</td>
      <td>{model}</td>
      <td>{year}</td>
    </tr>
  );
}

CarItem.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
};

CarItem.defaultProps = {
  car: {
    name: 'Toyota',
    model: 'Supra',
    year: '2000',
  },
};

export default CarItem;
