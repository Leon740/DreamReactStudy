import React from "react";
import PropTypes from "prop-types";
import CarItem from "./CarItem";

const CarsTable = ({ carsArray }) => {
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
        {carsArray.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </tbody>
    </table>
  );
};

CarsTable.propTypes = {
  carsArray: PropTypes.array.isRequired,
};

export default CarsTable;
