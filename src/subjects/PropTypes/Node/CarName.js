import React from "react";
import PropTypes from "prop-types";

const CarName = ({ name }) => {
  return <>{name}</>;
};

CarName.propTypes = {
  name: PropTypes.node.isRequired,
};

export default CarName;
