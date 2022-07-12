import React from "react";
import PropTypes from "prop-types";

const Sibling1 = ({ carName }) => {
  return (
    <p>
      My <u>Dream</u> is <b>{carName}</b>
    </p>
  );
};

Sibling1.propTypes = {
  carName: PropTypes.string.isRequired,
};

export default Sibling1;
