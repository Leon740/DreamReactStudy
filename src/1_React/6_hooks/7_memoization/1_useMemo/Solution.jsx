import React, { useState, useMemo } from 'react';
import ThemeToggler from './ThemeToggler';

// === Concept
// === Problem
// 1) each time we change (stCounter) we call a render
// 2) each render calls the whole logic of the Component, including (fnComplexCalc)
// === Solution
// useMemo(() => {}, [])
// (useMemo) returns the (result of the callback)=(value) which will be called when the dependencies array is changed
// (useMemo) caches the callback passed to it
// In this case when we change (stDarkTheme), (fnComplexCalc) is not being called

function fnComplexCalc(numCounterArg) {
  let numDelay = 0;

  while (numDelay < 30000) {
    numDelay++;
    console.log(numDelay);
  }

  return numCounterArg * 2;
}

function Solution() {
  const [stCounter, setStCounter] = useState(0);

  const numComplexCalcResult = useMemo(() => fnComplexCalc(stCounter), [stCounter]);

  const [stDarkTheme, setStDarkTheme] = useState(false);

  return (
    <section>
      <h2>Solution</h2>
      <div>
        <p>
          counter :
          {' '}
          {stCounter}
        </p>
        <button type="button" onClick={() => setStCounter((prev) => prev + 1)}>increase counter</button>
      </div>

      <p>
        complex calculations:
        {' '}
        {numComplexCalcResult}
      </p>

      <ThemeToggler darkTheme={stDarkTheme} onChange={() => setStDarkTheme((prev) => !prev)} />
    </section>
  );
}

export default Solution;
