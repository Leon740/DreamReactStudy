import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CarDisplay({ car }) {
  return (
    <p>
      My Dream Car is
      {car !== '' ? car : 'Evo 9'}
    </p>
  );
}

CarDisplay.propTypes = {
  car: PropTypes.string.isRequired,
};

function CarSelect({ onChange }) {
  return <input onChange={(event) => onChange(event.target.value)} />;
}

CarSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

function Car() {
  const [carState, setCarState] = useState('Evo 9');

  return (
    <div>
      <CarDisplay car={carState} />
      <CarSelect onChange={setCarState} />
    </div>
  );
}

export default Car;
