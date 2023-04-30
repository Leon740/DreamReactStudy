import React from 'react';
import PropTypes from 'prop-types';
import CarItem from './CarItem';

function CarsTable({ carsArray }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {carsArray.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </tbody>
    </table>
  );
}

CarsTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carsArray: PropTypes.array.isRequired,
};

export default CarsTable;
