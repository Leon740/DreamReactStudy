import React from 'react';
import Error from './Error';

function ErrorWrapper({ as = 'p', className = '', msg = '' }) {
  return <Error as={as} className={`text-rose-500 ${className}`} msg={msg} />;
}
export default ErrorWrapper;
