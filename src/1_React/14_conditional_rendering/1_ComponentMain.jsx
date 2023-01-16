/* eslint-disable no-unreachable */
import React from 'react';
import ComponentItem from './ComponentItem';

function ComponentMain() {
  const activeComponent = 3;

  switch (activeComponent) {
    case 1: return <ComponentItem number={1} />; break;
    case 2: return <ComponentItem number={2} />; break;
    case 3: return <ComponentItem number={3} />; break;
    default: return null;
  }
}

export default ComponentMain;
