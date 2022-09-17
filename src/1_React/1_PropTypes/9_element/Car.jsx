import React from 'react';
import CarName from './CarName';

function Car() {
  return (
    <div>
      My Car is
      {' '}
      <CarName
        name={(
          <div className="car__name">
            <h3>Toyota Supra</h3>
          </div>
        )}
      />
    </div>
  );
}

export default Car;
