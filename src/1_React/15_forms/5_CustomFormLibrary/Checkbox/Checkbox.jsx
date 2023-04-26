import React from 'react';
import { useFieldContextValueFn } from '../FormContext';

function Checkbox({
  id = '',
  name = '',
  ariaLabel = '',
  required = false,
  disabled = false,
  className = ''
}) {
  const { value, onChangeFn, ref } = useFieldContextValueFn(name);

  return (
    <input
      ref={ref}
      id={id}
      type="checkbox"
      name={name}
      aria-label={ariaLabel}
      required={required}
      disabled={disabled}
      value={value}
      // checked={value === 'on'}
      onChange={(event) => onChangeFn(name, event.target.checked ? 'on' : 'off')}
      className={className}
    />
  );
}

export default Checkbox;
