import React from "react";
import PropTypes from "prop-types";

const Bool = ({ inStock }) => {
  return <p>Toyota Supra {inStock ? "is" : "is not"} in Stock</p>;
};

Bool.propTypes = {
  inStock: PropTypes.bool.isRequired,
};

export default Bool;
