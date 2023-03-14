/* eslint-disable react/prop-types */
import React, { forwardRef, useState } from 'react';

const CarItem = forwardRef((props, ref) => {
  const { type = '', initialValue = '1' } = props;
  const [carName, setCarName] = useState(initialValue);

  return (
    <div>
      <h3 className="mt-3">
        My
        {' '}
        <u>{type}</u>
        {' '}
        Car is
        {' '}
        {carName}
      </h3>

      <div className="mt-3">
        <input
          value={carName}
          onChange={(event) => {
            setCarName(event.target.value);
          }}
          ref={ref}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            setCarName('');
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
});

export default CarItem;
