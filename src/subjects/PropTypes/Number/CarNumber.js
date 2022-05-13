import React from "react";
import PropTypes from "prop-types";

const CarNumber = ({ modelNumber }) => {
  return <>{modelNumber}</>;
};

CarNumber.propTypes = {
  modelNumber: PropTypes.number.isRequired,
};

export default CarNumber;
