import React from "react";
import PropTypes from "prop-types";

const Toyota = ({ model }) => {
  return <>{model}</>;
};

Toyota.propTypes = {
  model: PropTypes.oneOfType([
    PropTypes.oneOf(["Chaser", "Cresta", "Mark"]),
    PropTypes.number,
  ]).isRequired,
};

export default Toyota;
