import React, { useState, useEffect, useRef } from 'react';
import { useFieldContextValueFn } from '../FormContext';
import LabelWrapper from '../Label/LabelWrapper';
import CheckboxGroupItem from './CheckboxGroupItem';
import ErrorWrapper from '../Error/ErrorWrapper';

function CheckboxGroup({ name = '', label = '', isAsterisk = false, description, options = [] }) {
  const isMounted = useRef(false);

  const { value, onChangeFn } = useFieldContextValueFn(name);

  const [selectedCheckboxesSt, setSelectedCheckboxesSt] = useState(value);

  const checkboxGroupOnChangeFn = (checkboxValue) => {
    if (selectedCheckboxesSt.includes(checkboxValue)) {
      setSelectedCheckboxesSt((prev) => prev.filter((val) => val !== checkboxValue));
    } else {
      setSelectedCheckboxesSt((prev) => [...prev, checkboxValue]);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      onChangeFn(name, selectedCheckboxesSt);
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCheckboxesSt]);

  return (
    <div className="my-8">
      <LabelWrapper htmlFor={name} isAsterisk={isAsterisk}>
        {label}
      </LabelWrapper>

      {description && <p className="text-md text-slate-400">{description}</p>}

      <ul className="flex items-center my-2 -mx-2">
        {options.map((option) => (
          <li className="flex mx-2" key={option}>
            <CheckboxGroupItem
              id={option}
              name={name}
              label={option}
              ariaLabel={`${option} checkbox`}
              checked={selectedCheckboxesSt.includes(option)}
              value={option}
              onChangeFn={checkboxGroupOnChangeFn}
            />
          </li>
        ))}
      </ul>

      <ErrorWrapper name={name} />
    </div>
  );
}
export default CheckboxGroup;
