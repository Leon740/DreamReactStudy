import React, { forwardRef } from 'react';
import Checkbox from './Checkbox';
import LabelWrapper from '../Label/LabelWrapper';

const CheckboxGroupItem = forwardRef(
  (
    {
      id = '',
      name = '',
      label = '',
      ariaLabel = '',
      checked = false,
      value = '',
      onChangeFn = () => {}
    },
    ref
  ) => {
    return (
      <>
        <div className="flex items-center">
          <Checkbox
            ref={ref}
            id={id}
            name={name}
            ariaLabel={ariaLabel}
            checked={checked}
            value={value}
            onChangeFn={onChangeFn}
            className="cursor-pointer accent-blue-600 outline-1 outline-blue-600"
          />
        </div>

        <LabelWrapper htmlFor={id} className="ml-2">
          {label}
        </LabelWrapper>
      </>
    );
  }
);
export default CheckboxGroupItem;
