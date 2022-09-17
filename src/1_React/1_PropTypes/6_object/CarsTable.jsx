import React from 'react';
import PropTypes from 'prop-types';
import CarItem from './CarItem';

function CarsTable({ carsObject }) {
  console.log(Object.keys(carsObject));

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
        {Object.keys(carsObject).map((key) => (
          <CarItem key={key} car={carsObject[key]} />
        ))}
      </tbody>
    </table>
  );
}

CarsTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carsObject: PropTypes.object.isRequired,
};

export default CarsTable;
