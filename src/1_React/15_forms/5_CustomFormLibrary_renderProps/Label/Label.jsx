import React from 'react';

function Label({
  htmlFor = '',
  className = '',
  children,
  isAsterisk = false,
  asteriskClassName = ''
}) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
      {isAsterisk && <span className={asteriskClassName}>&nbsp;&#42;</span>}
    </label>
  );
}
export default Label;
