import React, { useEffect, useState } from 'react';
import './Input.css';
import useDebounce from '1_React/6_hooks/12_custom_hooks/5_useDebounce/1_good/useDebounce';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';

const STYLES = {
  xs: {
    label: 'text-sm',
    description: 'text-xs',
    input: 'text-sm px-1 py-0.5',
    inputPaddingLeft: 'pl-6',
    icon: 'text-xs left-2',
    status: 'text-xs right-2'
  },
  sm: {
    label: 'text-md',
    description: 'text-sm',
    input: 'text-md px-2 py-1',
    inputPaddingLeft: 'pl-8',
    icon: 'text-sm left-3',
    status: 'text-sm right-3'
  },
  md: {
    label: 'text-lg',
    description: 'text-md',
    input: 'text-lg px-3 py-1.5',
    inputPaddingLeft: 'pl-10',
    icon: 'text-base left-4',
    status: 'text-lg right-4'
  },
  lg: {
    label: 'text-xl',
    description: 'text-lg',
    input: 'text-xl px-4 py-2',
    inputPaddingLeft: 'pl-10',
    icon: 'text-base left-4',
    status: 'text-xl right-4'
  }
};

function Status({ className = '', children }) {
  return <span className={`absolute top-1/2 -translate-y-1/2 ${className}`}>{children}</span>;
}

function Input({
  id = '',
  name = '',
  label = '',
  type = '',
  placeholder = '',
  ariaLabel = '',
  required = false,
  disabled = false,
  description,
  radius = 'rounded-md',
  size = 'md',
  icon,
  touched,
  error,
  value = '',
  onChangeFn = () => {},
  formReset: [isFormResetSt = false, setIsFormResetSt = () => {}]
}) {
  const {
    label: clsLabel,
    description: clsDescription,
    input: clsInput,
    inputPaddingLeft: clsInputPaddingLeft,
    icon: clsIcon,
    status: clsStatus
  } = STYLES[size];

  const [inputSt, setInputSt] = useState(value);
  const debouncedValue = useDebounce(inputSt, 100);

  useEffect(() => {
    if (isFormResetSt) {
      setInputSt('');
      setIsFormResetSt((prev) => !prev);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormResetSt]);

  useEffect(() => {
    onChangeFn(name, debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const isValid = touched && !error;
  const isInvalid = touched && error;

  return (
    <div className="my-8">
      <label htmlFor={id} className={`cursor-pointer ${clsLabel} block`}>
        {label}
        {required && <span className="text-rose-500">&nbsp;&#42;</span>}
      </label>

      {description && <p className={`text-slate-400 ${clsDescription}`}>{description}</p>}

      <div className="relative">
        {icon && (
          <span className={`text-slate-500 absolute top-1/2 -translate-y-1/2 ${clsIcon}`}>
            {icon}
          </span>
        )}

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          required={required}
          disabled={disabled}
          value={inputSt}
          onChange={(event) => setInputSt(event.target.value)}
          className={`
            outline-0
            text-slate-400
            disabled:bg-slate-200 disabled:cursor-not-allowed
            block w-full my-2 border border-slate-400
            ${clsInput}
            ${icon ? clsInputPaddingLeft : ''}
            ${radius}
            ${isInvalid ? 'border-rose-500' : ''}
            ${isValid && 'border-green-500'}
          `}
        />

        {isValid && (
          <Status className={`text-green-500 ${clsStatus}`}>{!error && <BiCheckCircle />}</Status>
        )}

        {isInvalid && (
          <Status className={`text-rose-500 ${clsStatus}`}>{error && <BiErrorCircle />}</Status>
        )}
      </div>

      {isInvalid && <p className="text-rose-500">{error}</p>}
    </div>
  );
}
export default Input;
