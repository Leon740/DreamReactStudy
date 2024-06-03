import React, { useState, useEffect } from 'react';
import useThrottledValue from './useThrottledValue';

const TIMEOUT_NUM = 2000;

function Button() {
  const [counterSt, setCounterSt] = useState(0);
  const throttledCounter = useThrottledValue(counterSt, TIMEOUT_NUM);

  useEffect(() => {
    console.log(`throttledCounter ${throttledCounter} each ${TIMEOUT_NUM}`);
  }, [throttledCounter]);

  return (
    <section>
      <h3>counterSt: {counterSt}</h3>
      <h3>throttledCounter: {throttledCounter}</h3>
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
