import React, { useState, useEffect } from 'react';
import useDebouncedValue from './useDebouncedValue';

const TIMEOUT_NUM = 2000;

function Button() {
  const [counterSt, setCounterSt] = useState(0);
  const debouncedCounter = useDebouncedValue(counterSt, TIMEOUT_NUM);

  useEffect(() => {
    console.log(`debouncedCounter ${debouncedCounter} after ${TIMEOUT_NUM}`);
  }, [debouncedCounter]);

  return (
    <section>
      <h3>counterSt: {counterSt}</h3>
      <h3>debouncedCounter: {debouncedCounter}</h3>
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
