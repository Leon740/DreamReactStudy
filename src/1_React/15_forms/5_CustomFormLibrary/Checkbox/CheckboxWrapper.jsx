import React from 'react';
import Checkbox from './Checkbox';
import LabelWrapper from '../Label/LabelWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

function CheckboxWrapper({
  name = '',
  label = '',
  type = 'checkbox',
  ariaLabel = '',
  required = false,
  disabled = false,
  description
}) {
  return (
    <div className="my-8">
      <div className="flex items-start">
        <div>
          <Checkbox
            name={name}
            type={type}
            aria-label={ariaLabel}
            required={required}
            disabled={disabled}
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

      <ErrorWrapper name={name} />
    </div>
  );
}
export default CheckboxWrapper;
