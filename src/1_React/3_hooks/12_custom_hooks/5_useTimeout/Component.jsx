import React, { useState } from 'react';
import useTimeout from './useTimeout';

function Component() {
  const [counterSt, setCounterSt] = useState(0);

  const [startFn, stopFn] = useTimeout(() => {
    setCounterSt((prevCounterSt) => prevCounterSt + 10);
  }, 2000);

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
