import React from 'react';
import PropTypes from 'prop-types';

function Sibling2({ carName, setCarName }) {
  return (
    <input value={carName} onChange={(event) => setCarName(event.target.value)} />
  );
}

Sibling2.propTypes = {
  carName: PropTypes.string.isRequired,
  setCarName: PropTypes.func.isRequired,
};

export default Sibling2;
