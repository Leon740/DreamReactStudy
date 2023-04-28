import React from 'react';

function Error({ as = 'p', className = '', msg = '' }) {
  const Tag = as;

  return <Tag className={className}>{`${msg[0].toUpperCase()}${msg.substring(1)}`}</Tag>;
}
export default Error;
