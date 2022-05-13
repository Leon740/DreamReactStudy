import React from "react";
import PropTypes from "prop-types";

const CarDisplay = ({ element }) => {
  return <div>{element}</div>;
};

CarDisplay.propTypes = {
  element: PropTypes.element.isRequired,
};

export default CarDisplay;
