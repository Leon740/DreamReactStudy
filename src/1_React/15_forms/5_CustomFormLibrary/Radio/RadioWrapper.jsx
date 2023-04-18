import React from 'react';
import LabelWrapper from '../Label/LabelWrapper';
import Radio from './Radio';

function RadioWrapper({
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
}) {
  return (
    <>
      <div className="flex items-center">
        <Radio
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
    </>
  );
}
export default RadioWrapper;
