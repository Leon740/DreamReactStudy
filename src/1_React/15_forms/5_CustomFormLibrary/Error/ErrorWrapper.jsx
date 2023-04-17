import React from 'react';
import Error from './Error';

function ErrorWrapper({ as = 'p', className = '', children }) {
  return (
    <Error as={as} className={`text-rose-500 ${className}`}>
      {children}
    </Error>
  );
}
export default ErrorWrapper;
