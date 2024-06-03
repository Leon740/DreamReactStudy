import React, { useState } from 'react';
import useThrottledCallback from './useThrottledCallback';

const TIMEOUT_NUM = 2000;

function Button() {
  const [counterSt, setCounterSt] = useState(0);

  const callbackFn = () => {
    console.log(`throttled API call each ${TIMEOUT_NUM}`);
    console.log(counterSt);
  };

  useThrottledCallback(() => callbackFn(), [counterSt], TIMEOUT_NUM);

  return (
    <section>
      <h3>counterSt: {counterSt}</h3>
      <button
        type="button"
        onClick={() => setCounterSt((prevCounterSt) => prevCounterSt + 1)}
      >
        +
      </button>
    </section>
  );
}
export default Button;
