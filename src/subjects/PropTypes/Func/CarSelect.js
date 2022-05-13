import React from "react";
import PropTypes from "prop-types";

const CarSelect = ({ selectCarFunc }) => {
  return (
    <div className="CarSelect">
      <input onChange={event => selectCarFunc(event.target.value)} />
    </div>
  );
};

CarSelect.propTypes = {
  selectCarFunc: PropTypes.func.isRequired,
};

export default CarSelect;
