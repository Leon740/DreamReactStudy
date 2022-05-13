import React from "react";
import PropTypes from "prop-types";

const CarDisplay = ({ car }) => {
  return (
    <p className="CarDisplay">
      Selected car is <u>{car}</u>
    </p>
  );
};

CarDisplay.propTypes = {
  car: PropTypes.string.isRequired,
};

export default CarDisplay;
