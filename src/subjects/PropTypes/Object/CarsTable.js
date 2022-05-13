import React from "react";
import PropTypes from "prop-types";
import CarItem from "./CarItem";

const CarsTable = ({ carsObject }) => {
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
        {Object.keys(carsObject).map(key => (
          <CarItem key={key} car={carsObject[key]} />
        ))}
      </tbody>
    </table>
  );
};

CarsTable.propTypes = {
  carsObject: PropTypes.object.isRequired,
};

export default CarsTable;
