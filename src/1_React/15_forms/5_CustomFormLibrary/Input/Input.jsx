import React, { forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      name = '',
      type = 'text',
      placeholder = '',
      ariaLabel = '',
      required = false,
      disabled = false,
      value = '',
      onChangeFn = () => {},
      className = ''
    },
    ref
  ) => {
    Input.displayName = 'Input';

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
);

export default Input;
