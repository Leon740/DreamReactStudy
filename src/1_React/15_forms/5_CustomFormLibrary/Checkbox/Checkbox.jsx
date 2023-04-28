import React from 'react';
import { useFieldContextValueFn } from '../FormContext';

function Checkbox({
  id = '',
  name = '',
  ariaLabel = '',
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
      type="checkbox"
      name={name}
      aria-label={ariaLabel}
      disabled={disabled}
      checked={checked}
      value={value}
      onChange={(event) => onChangeFn(event.target.value)}
      className={className}
    />
  );
}

export default Checkbox;
