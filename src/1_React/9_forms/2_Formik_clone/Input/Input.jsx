import React from 'react';
import { useFieldContextValueFn } from '../FormContext';

function Input({
  name = '',
  type = 'text',
  placeholder = '',
  ariaLabel = '',
  disabled = false,
  className = ''
}) {
  const { value, onChangeFn, ref } = useFieldContextValueFn(name);

  const isTextarea = type === 'textarea';
  const Tag = isTextarea ? 'textarea' : 'input';

  return (
    <Tag
      ref={ref}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      disabled={disabled}
      value={value}
      onChange={(event) => onChangeFn(name, event.target.value)}
      className={className}
    />
  );
}

export default Input;
