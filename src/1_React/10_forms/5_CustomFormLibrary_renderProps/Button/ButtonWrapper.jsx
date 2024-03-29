import React from 'react';
import Button from './Button';

function ButtonWrapper({ type = '', className = '', onClick = () => {}, children }) {
  return (
    <Button
      type={type}
      className={`text-white px-3 py-1.5 rounded-md ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
}

export default ButtonWrapper;
