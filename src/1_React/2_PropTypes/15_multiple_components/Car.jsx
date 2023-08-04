import React from 'react';
import PropTypes from 'prop-types';

function CarName({ name }) {
  return <i>{name}</i>;
}

CarName.propTypes = {
  name: PropTypes.string.isRequired,
};

function CarModel({ model }) {
  return <u>{model}</u>;
}

CarModel.propTypes = {
  model: PropTypes.number.isRequired,
};

function Car() {
  return (
    <div>
      My Car is
      {' '}
      <CarName name="Lancer Evo" />
      {' '}
      <CarModel model={9} />
    </div>
  );
}

export default Car;
