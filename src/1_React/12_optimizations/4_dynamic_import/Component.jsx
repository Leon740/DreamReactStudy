// === Problem
// User may use only one section of your functionality, all the rest might not be used
// === Solution
// Dynamically import and use modules
// This will make our app more lightweight, improve the prod build

import React, { useState } from 'react';
// import sumFn from './sum';

function Component() {
  const [sumSt, setSumSt] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => import('./sum').then((module) => setSumSt(module.sumFn(2, 2)))}
      >
        sumFn
      </button>
      <h2>{sumSt}</h2>
    </div>
  );
}
export default Component;
