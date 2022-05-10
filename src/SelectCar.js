import React from 'react';
import PropTypes from 'prop-types';

const SelectCar = ({ onChange }) => {
  return (
    <input onChange={event => onChange(event.target.value)} />
  );
};

SelectCar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectCar;
