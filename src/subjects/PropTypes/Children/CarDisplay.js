import React from "react";
import PropTypes from "prop-types";

const CarDisplay = props => {
  return <div>{props.children}</div>;
};

CarDisplay.propTypes = {
  children: PropTypes.node,
};

export default CarDisplay;
