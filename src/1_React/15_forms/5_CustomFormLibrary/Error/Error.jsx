import React from 'react';

function Error({ as = 'p', className = '', children }) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
export default Error;
