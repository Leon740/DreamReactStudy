import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { useFieldContextValueFn } from '../FormContext';
import Input from './Input';
import LabelWrapper from '../Label/LabelWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

function InputStatus({ isValid }) {
  return (
    <span
      className={`text-lg absolute top-1/2 -translate-y-1/2 right-4 ${
        isValid ? 'text-green-500' : 'text-rose-500'
      }`}
    >
      {isValid ? <BiCheckCircle /> : <BiErrorCircle />}
    </span>
  );
}

function InputWrapper({
  name = '',
  label = '',
  type = 'text',
  placeholder = '',
  ariaLabel = '',
  isAsterisk = false,
  disabled = false,
  description,
  icon
}) {
  const { isTouched, error } = useFieldContextValueFn(name);

  const isTextarea = type === 'textarea';

  const isValid = isTouched && !error;
  const isInvalid = isTouched && error;

  return (
    <div className="my-8">
      <LabelWrapper
        htmlFor={name}
        className="block text-lg"
        isAsterisk={isAsterisk}
      >
        {label}
      </LabelWrapper>

      {description && <p className="text-md text-slate-400">{description}</p>}

      <div className="relative">
        {icon && (
          <span className="text-slate-500 absolute top-1/2 -translate-y-1/2 text-base left-4">
            {icon}
          </span>
        )}

        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          disabled={disabled}
          className={`
              block w-full px-3 py-1.5 text-slate-400 text-lg my-2 border-2 border-slate-200 rounded-md
              ${icon ? 'pl-10' : ''}
              outline-0
              disabled:bg-slate-200 disabled:cursor-not-allowed
              ${!isInvalid && !isValid ? 'focus:border-blue-600' : ''}
              ${isInvalid ? 'border-rose-300' : ''}
              ${isValid ? 'border-green-300' : ''}
              ${isTextarea ? 'resize-y' : ''}
            `}
        />

        {isTouched && <InputStatus isValid={isValid} />}
      </div>

      <ErrorWrapper name={name} />
    </div>
  );
}

export default InputWrapper;
