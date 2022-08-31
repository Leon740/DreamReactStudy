import React from "react";
import PropTypes from "prop-types";

const CarItem = ({ car }) => {
  const { name, model, year } = car;

  return (
    <tr>
      <td>{name}</td>
      <td>{model}</td>
      <td>{year}</td>
    </tr>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarItem;
