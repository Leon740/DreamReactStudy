import React from 'react';
import LabelWrapper from '../Label/LabelWrapper';
import Radio from './Radio';

function RadioWrapper({
  id = '',
  name = '',
  label = '',
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
          ariaLabel={ariaLabel}
          required={required}
          disabled={disabled}
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

      <div>
        <LabelWrapper htmlFor={id} className="ml-2">
          {label}
        </LabelWrapper>
      </div>
    </>
  );
}
export default RadioWrapper;
