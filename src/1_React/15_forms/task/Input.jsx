import React from 'react';
import './Input.css';

const SIZES = {
  xs: {
    label: 'text-sm',
    description: 'text-xs',
    input: 'text-sm',
    padding: 'px-1 py-0.5'
  },
  sm: {
    label: 'text-md',
    description: 'text-sm',
    input: 'text-md',
    padding: 'px-2 py-1'
  },
  md: {
    label: 'text-lg',
    description: 'text-md',
    input: 'text-lg',
    padding: 'px-3 py-1.5'
  },
  lg: {
    label: 'text-xl',
    description: 'text-lg',
    input: 'text-xl',
    padding: 'px-4 py-2'
  }
};

function Input({
  id,
  name,
  label,
  type,
  placeholder,
  ariaLabel,
  required,
  disabled,
  description,
  radius,
  size,
  error
}) {
  const selectedSize = SIZES[size];

  return (
    <div className="my-8">
      <label className={`cursor-pointer ${selectedSize.label} block`} htmlFor={id}>
        {label}
        {required && <span className="text-rose-500">&nbsp;&#42;</span>}
      </label>
      {description && <p className={`text-slate-400 ${selectedSize.description}`}>{description}</p>}
      <input
        className={`block w-full my-2 ${selectedSize.input} ${
          selectedSize.padding
        } border border-slate-400 disabled:bg-slate-200 rounded-${radius} disabled:cursor-not-allowed ${
          error ? 'border-rose-500' : ''
        }`}
        aria-label={ariaLabel}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {error && <p className="text-rose-500">{error}</p>}
    </div>
  );
}
export default Input;
