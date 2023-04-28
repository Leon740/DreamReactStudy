import React, { useState, useEffect, useRef } from 'react';
import { useFieldContextValueFn } from '../FormContext';
import Checkbox from './Checkbox';
import LabelWrapper from '../Label/LabelWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

function CheckboxWrapper({
  id = '',
  name = '',
  label = '',
  ariaLabel = '',
  isAsterisk = false,
  disabled = false,
  description
}) {
  const isMounted = useRef(false);

  const { value, onChangeFn } = useFieldContextValueFn(name);

  // const checkboxOnChangeFn = (checkboxValue) => onChangeFn(name, checkboxValue);
  const [selectedCheckboxSt, setSelectedCheckboxSt] = useState(value);

  const checkboxOnChangeFn = (checkboxValue) => {
    if (checkboxValue === 'off') {
      setSelectedCheckboxSt('on');
    } else {
      setSelectedCheckboxSt('off');
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      onChangeFn(name, selectedCheckboxSt);
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCheckboxSt]);

  return (
    <>
      <div className="flex items-start">
        <div>
          <Checkbox
            id={id}
            name={name}
            ariaLabel={ariaLabel}
            disabled={disabled}
            checked={selectedSt === 'on'}
            value={selectedSt}
            onChangeFn={checkboxOnChangeFn}
            className="cursor-pointer accent-blue-600 outline-1 outline-blue-600"
          />
        </div>

        <div className="ml-2">
          <LabelWrapper htmlFor={id} isAsterisk={isAsterisk}>
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
