import React, { forwardRef } from 'react';

const Radio = forwardRef(
  (
    {
      id = '',
      name = '',
      ariaLabel = '',
      checked = false,
      value = '',
      onChangeFn = () => {},
      className = ''
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        name={name}
        type="radio"
        aria-label={ariaLabel}
        checked={checked}
        value={value}
        onChange={(event) => onChangeFn(event.target.value)}
        className={className}
      />
    );
  }
);
export default Radio;
