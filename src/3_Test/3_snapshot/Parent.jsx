import React from 'react';
import Child from './Child';

function Parent() {
  const list = ['React', 'Redux', 'TypeScript'];

  return (
    <Child list={list} />
  );
}

export default Parent;
