/* eslint-disable no-unreachable */
import React from 'react';
import ComponentItem from './ComponentItem';

function ComponentMain() {
  const activeComponent = 3;

  let Component = null;

  switch (activeComponent) {
    case 1: Component = <ComponentItem number={1} />; break;
    case 2: Component = <ComponentItem number={2} />; break;
    case 3: Component = <ComponentItem number={3} />; break;
    default: Component = null;
  }

  return Component;
}

export default ComponentMain;
