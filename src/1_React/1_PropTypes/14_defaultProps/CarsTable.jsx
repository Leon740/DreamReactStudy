import React from "react";
import PropTypes from "prop-types";
import CarItem from "./CarItem";

const CarsTable = ({ carsArray }) => {
  // 2 ways = argument default value
  // const CarsTable = ({
  //   carsArray = [{ id: 0, name: "Toyota", model: "Supra", year: "2010" }],
  // }) => {
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

CarsTable.defaultProps = {
  carsArray: [
    { id: 0, name: "Toyota", model: "Supra", year: "2010" },
    { id: 1, name: "Mitsubishi", model: "Lancer Evo 9", year: "2018" },
    { id: 2, name: "Nissan", model: "R32", year: "2016" },
  ],
};

export default CarsTable;
