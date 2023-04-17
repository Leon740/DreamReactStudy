import React, { forwardRef } from 'react';
import { useContextValueFn } from '../FormContext';
import Checkbox from './Checkbox';
import LabelWrapper from '../Label/LabelWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

const CheckboxWrapper = forwardRef(
  (
    {
      name = '',
      label = '',
      type = 'checkbox',
      ariaLabel = '',
      required = false,
      disabled = false,
      description
    },
    ref
  ) => {
    CheckboxWrapper.displayName = 'CheckboxWrapper';

    const { isTouched, error, value, onChangeFn } = useContextValueFn(name);

    const isInvalid = isTouched && error;

    return (
      <div className="my-8">
        <div className="flex items-start">
          <div>
            <Checkbox
              ref={ref}
              name={name}
              type={type}
              aria-label={ariaLabel}
              required={required}
              disabled={disabled}
              value={value}
              onChangeFn={onChangeFn}
              className="cursor-pointer accent-blue-600 outline-1 outline-blue-600"
            />
          </div>

          <div className="ml-2">
            <LabelWrapper htmlFor={name} isAsterisk={required}>
              {label}
            </LabelWrapper>

            {description && <p className="text-md text-slate-400">{description}</p>}
          </div>
        </div>

        {isInvalid && <ErrorWrapper>{error}</ErrorWrapper>}
      </div>
    );
  }
);
export default CheckboxWrapper;
