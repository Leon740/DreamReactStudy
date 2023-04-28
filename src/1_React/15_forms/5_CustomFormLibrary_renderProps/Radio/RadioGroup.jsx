import React, { useState, useEffect, forwardRef } from 'react';
import LabelWrapper from '../Label/LabelWrapper';
import RadioGroupItem from './RadioGroupItem';
import ErrorWrapper from '../Error/ErrorWrapper';

const RadioGroup = forwardRef(
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
    const [selectedRadioSt, setSelectedRadioSt] = useState(value);

    useEffect(() => {
      onChangeFn(name, selectedRadioSt);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRadioSt]);

    return (
      <div className="my-8">
        <LabelWrapper htmlFor={name} isAsterisk={isAsterisk}>
          {label}
        </LabelWrapper>

        {description && <p className="text-md text-slate-400">{description}</p>}

        <ul className="flex items-center my-2 -mx-2">
          {options.map((option) => (
            <li className="flex mx-2" key={option}>
              <RadioGroupItem
                ref={ref}
                id={option}
                name={name}
                label={option}
                ariaLabel={`${option} radio`}
                checked={value === option}
                value={option}
                onChangeFn={setSelectedRadioSt}
              />
            </li>
          ))}
        </ul>

        {touched && error && <ErrorWrapper msg={error} />}
      </div>
    );
  }
);
export default RadioGroup;
