import React from "react";
import PropTypes from "prop-types";

const CarName = ({ name }) => {
  return <p>Car is {name}</p>;
};

CarName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CarName;
