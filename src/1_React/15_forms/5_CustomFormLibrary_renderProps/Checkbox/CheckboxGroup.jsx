import React, { useState, useEffect, useRef, forwardRef } from 'react';
import LabelWrapper from '../Label/LabelWrapper';
import CheckboxGroupItem from './CheckboxGroupItem';
import ErrorWrapper from '../Error/ErrorWrapper';

const CheckboxGroup = forwardRef(
  (
    {
      name = '',
      label = '',
      isAsterisk = false,
      description,
      options = [],
      touched = false,
      error = '',
      value = '',
      onChangeFn = () => {}
    },
    ref
  ) => {
    const isMounted = useRef(false);

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
                ref={ref}
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

        {touched && error && <ErrorWrapper msg={error} />}
      </div>
    );
  }
);
export default CheckboxGroup;
