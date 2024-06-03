import React, { forwardRef } from 'react';
import LabelWrapper from '../Label/LabelWrapper';
import Radio from './Radio';

const RadioGroupItem = forwardRef(
  (
    {
      id = '',
      name = '',
      label = '',
      ariaLabel = '',
      checked = false,
      value = '',
      onChangeFn = () => {}
    },
    ref
  ) => {
    return (
      <>
        <div className="flex items-center">
          <Radio
            ref={ref}
            id={id}
            name={name}
            ariaLabel={ariaLabel}
            checked={checked}
            value={value}
            onChangeFn={onChangeFn}
            className={`
            appearance-none cursor-pointer
            w-4 h-4 rounded-full
            focus:border-4 focus:border-blue-500
            ${checked ? 'border-4 border-blue-500' : 'border-2 border-slate-300 '}
          `}
          />
        </div>

        <LabelWrapper htmlFor={id} className="ml-2">
          {label}
        </LabelWrapper>
      </>
    );
  }
);
export default RadioGroupItem;
