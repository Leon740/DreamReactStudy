import React from 'react';
import { useFieldContextValueFn } from '../FormContext';

function Radio({
  id = '',
  name = '',
  type = '',
  ariaLabel = '',
  required = false,
  disabled = false,
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
      type={type}
      aria-label={ariaLabel}
      required={required}
      disabled={disabled}
      checked={checked}
      value={value}
      onChange={(event) => onChangeFn(event.target.value)}
      className={className}
    />
  );
}
export default Radio;
