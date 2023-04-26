import React from 'react';
import Checkbox from './Checkbox';
import LabelWrapper from '../Label/LabelWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

function CheckboxWrapper({
  id = '',
  name = '',
  label = '',
  ariaLabel = '',
  required = false,
  disabled = false,
  description
}) {
  return (
    <>
      <div className="flex items-start">
        <div>
          <Checkbox
            id={id}
            name={name}
            ariaLabel={ariaLabel}
            required={required}
            disabled={disabled}
            className="cursor-pointer accent-blue-600 outline-1 outline-blue-600"
          />
        </div>

        <div className="ml-2">
          <LabelWrapper htmlFor={id} isAsterisk={required}>
            {label}
          </LabelWrapper>

          {description && <p className="text-md text-slate-400">{description}</p>}
        </div>
      </div>

      <ErrorWrapper name={name} />
    </>
  );
}
export default CheckboxWrapper;
