/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Car from './Car';

function Component() {
  // === Concept
  // render prop is a prop, value of which is a function

  return (
    <Car
      favoriteCar={() => (
        <p>
          My
          {' '}
          <b>Favorite</b>
          {' '}
          is
          {' '}
          <u>Toyota Cresta</u>
        </p>
      )}
    />
  );
}

export default Component;
