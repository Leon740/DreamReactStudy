import React from "react";
import PropTypes from "prop-types";

const Child = ({ carName, setCarName }) => {
  return (
    <input value={carName} onChange={event => setCarName(event.target.value)} />
  );
};

Child.propTypes = {
  carName: PropTypes.string.isRequired,
  setCarName: PropTypes.func.isRequired,
};

export default Child;
