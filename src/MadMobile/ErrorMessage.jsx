import React from 'react';

function ErrorMessage({ children }) {
  return (
    <div className="p-5 bg-red-600/50 text-red-600 rounded">{children}</div>
  );
}
export default ErrorMessage;
