import React, { useState } from 'react';
import useInterval from './useInterval';

function Component() {
  const [counterSt, setCounterSt] = useState(0);

  const [startFn, stopFn] = useInterval(() => {
    setCounterSt((prevCounterSt) => prevCounterSt + 10);
  }, 1000);

  return (
    <section>
      <h3>{counterSt}</h3>
      <button type="button" onClick={() => stopFn()}>
        stop timeout
      </button>
      <button type="button" onClick={() => startFn()}>
        start timeout
      </button>
    </section>
  );
}
export default Component;
