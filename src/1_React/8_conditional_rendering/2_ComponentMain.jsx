/* eslint-disable no-unreachable */
import React from 'react';
import ComponentItem from './ComponentItem';

function ComponentMain() {
  const activeComponent = 3;

  const components = {
    1: <ComponentItem number={1} />,
    2: <ComponentItem number={2} />,
    3: <ComponentItem number={3} />
  };

  return components[activeComponent];
}

export default ComponentMain;
