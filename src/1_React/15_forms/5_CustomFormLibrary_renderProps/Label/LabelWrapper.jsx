import React from 'react';
import Label from './Label';

function LabelWrapper({ htmlFor = '', className = '', children, isAsterisk = false }) {
  return (
    <Label
      htmlFor={htmlFor}
      className={`cursor-pointer select-none ${className}`}
      isAsterisk={isAsterisk}
      asteriskClassName="text-rose-500"
    >
      {children}
    </Label>
  );
}
export default LabelWrapper;
