import React, { forwardRef, useState, useEffect } from 'react';
import { useContextValueFn } from '../FormContext';
import LabelWrapper from '../Label/LabelWrapper';
import RadioWrapper from '../Radio/RadioWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

const RadioGroup = forwardRef(
  (
    {
      name = '',
      label = '',
      type = '',
      ariaLabel = '',
      required = false,
      disabled = false,
      description,
      variants = []
    },
    ref
  ) => {
    RadioGroup.displayName = 'RadioGroup';

    const { isTouched, error, value, onChangeFn } = useContextValueFn(name);

    const isInvalid = isTouched && error;

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
          {variants.map((variant) => (
            <RadioWrapper
              key={variant}
              ref={ref}
              id={variant}
              name={name}
              label={variant}
              type={type}
              ariaLabel={ariaLabel}
              required={required}
              disabled={disabled}
              checked={value === variant}
              value={variant}
              onChangeFn={setSelectedSt}
            />
          ))}
        </ul>

        {isInvalid && <ErrorWrapper>{error}</ErrorWrapper>}
      </div>
    );
  }
);
export default RadioGroup;
