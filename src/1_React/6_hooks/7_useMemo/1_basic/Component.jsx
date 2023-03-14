import React from 'react';
import Problem from './Problem';
import Solution from './Solution';

function Component() {
  // === Concept
  // === Problem
  // 1) each time we change (colored) we call a (re)render
  // 2) each render calls the whole logic of the Component
  // 3) so (complexComputeFunc) is called on each (re)render and this causes a delay for (style) update
  // === Solution
  // useMemo(() => {}, [])
  // (useMemo) returns the (result of the callback)=(value) which will be called when dependencies array is changed
  // (useMemo) caches the callback passed to it
  return (
    <div>
      <Problem />
      <Solution />
    </div>
  );
}

export default Component;
