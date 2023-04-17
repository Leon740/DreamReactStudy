import React, { forwardRef } from 'react';

const Checkbox = forwardRef(
  (
    {
      name = '',
      type = 'checkbox',
      ariaLabel = '',
      required = false,
      disabled = false,
      value = '',
      onChangeFn = () => {},
      className = ''
    },
    ref
  ) => {
    Checkbox.displayName = 'Checkbox';

    return (
      <input
        ref={ref}
        id={name}
        type={type}
        name={name}
        aria-label={ariaLabel}
        required={required}
        disabled={disabled}
        checked={value}
        onChange={(event) => onChangeFn(name, event.target.checked)}
        className={className}
      />
    );
  }
);
export default Checkbox;
