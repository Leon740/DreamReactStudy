import React from "react";
import PropTypes from "prop-types";

const Toyota = ({ model }) => {
  return <>{model}</>;
};

Toyota.propTypes = {
  model: PropTypes.oneOf(["Cresta", "Chaser", "Mark"]).isRequired,
};

export default Toyota;
