import React from "react";
import PropTypes from "prop-types";

const Child = ({ carName }) => {
  return (
    <div>
      <p>
        My <u>Dream</u> is <b>{carName}</b>
      </p>
    </div>
  );
};

Child.propTypes = {
  carName: PropTypes.string.isRequired,
};

export default Child;
