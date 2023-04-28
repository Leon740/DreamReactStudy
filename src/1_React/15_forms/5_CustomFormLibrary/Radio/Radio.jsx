import React from 'react';
import { useFieldContextValueFn } from '../FormContext';

function Radio({
  id = '',
  name = '',
  ariaLabel = '',
  checked = false,
  value = '',
  onChangeFn = () => {},
  className = ''
}) {
  const { ref } = useFieldContextValueFn(name);

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
export default Radio;
