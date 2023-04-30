/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Car from './Car';

function Component() {
  // === Concept
  // render-prop is a prop, function with own render-method
  // So, instead of making render method in the component itself, we use render-props to define render-methods

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
