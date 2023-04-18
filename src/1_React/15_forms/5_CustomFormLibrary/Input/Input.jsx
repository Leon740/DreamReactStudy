/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react';
import { useContextValueFn } from '../FormContext';

function Input({
  name = '',
  type = 'text',
  placeholder = '',
  ariaLabel = '',
  required = false,
  disabled = false,
  className = ''
}) {
  const { value, onChangeFn, ref } = useContextValueFn(name);

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
      required={required}
      disabled={disabled}
      value={value}
      onChange={(event) => onChangeFn(name, event.target.value)}
      className={className}
    />
  );
}

export default Input;
