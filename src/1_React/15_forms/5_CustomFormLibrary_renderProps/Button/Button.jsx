import React from 'react';

function Button({ type = '', className = '', onClick = () => {}, children }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={className}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
