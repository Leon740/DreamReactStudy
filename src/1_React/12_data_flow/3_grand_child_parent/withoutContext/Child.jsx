import React from 'react';
import PropTypes from 'prop-types';
import GrandChild from './GrandChild';

function Child({ carName, setCarName }) {
  return (
    <>
      <code>Child :</code>
      <p>
        My
        {' '}
        <u>Dream</u>
        {' '}
        is
        {' '}
        <b>{carName}</b>
      </p>

      <GrandChild carName={carName} setCarName={setCarName} />
    </>
  );
}

Child.propTypes = {
  carName: PropTypes.string.isRequired,
  setCarName: PropTypes.func.isRequired,
};

export default Child;
