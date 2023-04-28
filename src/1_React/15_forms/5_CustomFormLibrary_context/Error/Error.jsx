import React from 'react';
import { useFieldContextValueFn } from '../FormContext';

function Error({ as = 'p', className = '', name }) {
  const { isTouched, error } = useFieldContextValueFn(name);

  const Tag = as;

  return isTouched && error ? (
    <Tag className={className}>{`${error[0].toUpperCase()}${error.substring(1)}`}</Tag>
  ) : null;
}
export default Error;
