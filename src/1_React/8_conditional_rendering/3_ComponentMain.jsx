/* eslint-disable no-unreachable */
import React from 'react';
import ComponentItem from './ComponentItem';

function ComponentMain() {
  const components = [
    <ComponentItem number={1} />,
    <ComponentItem number={2} />,
    <ComponentItem number={3} />
  ];

  const obj = {
    isOne: true,
    isTwo: false,
    isThree: false
  };

  return Object.keys(obj).map((key, index) => obj[key] && components[index]);
}

export default ComponentMain;
