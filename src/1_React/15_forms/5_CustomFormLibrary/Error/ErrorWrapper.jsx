import React from 'react';
import Error from './Error';

function ErrorWrapper({ as = 'p', className = '', name = '' }) {
  return <Error as={as} className={`text-rose-500 ${className}`} name={name} />;
}
export default ErrorWrapper;
