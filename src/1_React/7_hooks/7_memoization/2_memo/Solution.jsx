import React, { useState, useMemo, useCallback } from 'react';
import ThemeToggler from './ThemeToggler';

// === Concept
// === Problem
// 1) each time we change (stCounter) we call a render
// 2) each render calls the whole logic of the Component, including re-rendering (ThemeToggler) component
// === Solution
// useCallback(() => {}, [])
// (useCallback) returns the (callback) which will be updated when the dependencies array is changed
// In this case when we change (stDarkTheme), re-rendering of (ThemeToggler) component will not occur

function fnComplexCalc(numCounterArg) {
  let numDelay = 0;

  while (numDelay < 30000) {
    numDelay++;
    console.log(numDelay);
  }

  return numCounterArg * 2;
}

function Component() {
  const [stCounter, setStCounter] = useState(0);

  const numComplexCalcResult = useMemo(() => fnComplexCalc(stCounter), [stCounter]);

  const [stDarkTheme, setStDarkTheme] = useState(false);

  const fnThemeOnChange = useCallback(() => setStDarkTheme((prev) => !prev), [setStDarkTheme]);

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

      <ThemeToggler darkTheme={stDarkTheme} onChange={fnThemeOnChange} />
    </section>
  );
}

export default Component;
