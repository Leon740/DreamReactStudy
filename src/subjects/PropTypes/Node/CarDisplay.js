import React from "react";
import PropTypes from "prop-types";

const CarDisplay = ({ node }) => {
  return <div>{node}</div>;
};

CarDisplay.propTypes = {
  node: PropTypes.node.isRequired,
};

export default CarDisplay;
