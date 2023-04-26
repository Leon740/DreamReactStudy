import React, { useState, useEffect } from 'react';
import { useFieldContextValueFn } from '../FormContext';
import LabelWrapper from '../Label/LabelWrapper';
import CheckboxWrapper from './CheckboxWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

function CheckboxGroup({
  name = '',
  label = '',
  required = false,
  disabled = false,
  description,
  options = []
}) {
  const { value, onChangeFn } = useFieldContextValueFn(name);

  const [selectedSt, setSelectedSt] = useState(value);
  useEffect(() => {
    onChangeFn(name, selectedSt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSt]);

  return (
    <div className="my-8">
      <LabelWrapper htmlFor={name} isAsterisk={required}>
        {label}
      </LabelWrapper>

      {description && <p className="text-md text-slate-400">{description}</p>}

      <ul className="flex items-center my-2 -ml-2">
        {options.map((option) => (
          <li className="flex mx-2" key={option}>
            <CheckboxWrapper
              id={option}
              name={name}
              label={option}
              ariaLabel={`${option} checkbox`}
              required={required}
              disabled={disabled}
              // checked={value === option}
              value={option}
              onChangeFn={setSelectedSt((prev) => [...prev, option])}
            />
          </li>
        ))}
      </ul>

      <ErrorWrapper name={name} />
    </div>
  );
}
export default CheckboxGroup;
