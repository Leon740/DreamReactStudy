import React, { forwardRef } from 'react';
import LabelWrapper from '../Label/LabelWrapper';
import Radio from './Radio';

const RadioWrapper = forwardRef(
  (
    {
      id = '',
      name = '',
      label = '',
      type = '',
      ariaLabel = '',
      required = false,
      disabled = false,
      checked = false,
      value = '',
      onChangeFn = () => {}
    },
    ref
  ) => {
    RadioWrapper.displayName = 'RadioWrapper';

    return (
      <li className="flex mx-2">
        <div className="flex items-center">
          <Radio
            ref={ref}
            id={id}
            name={name}
            type={type}
            aria-label={ariaLabel}
            required={required}
            disabled={disabled}
            checked={checked}
            value={value}
            onChangeFn={onChangeFn}
            className={`
              appearance-none cursor-pointer
              w-4 h-4 border border-slate-400 rounded-full
              focus:border-4 focus:border-blue-500
              ${checked ? 'border-4 border-blue-500' : ''}
          `}
          />
        </div>

        <div>
          <LabelWrapper htmlFor={id} className="ml-2">
            {label}
          </LabelWrapper>
        </div>
      </li>
    );
  }
);
export default RadioWrapper;
