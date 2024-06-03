import React, { useState } from 'react';
import useUpdateEffect from './useUpdateEffect';

function Component() {
  const [counterSt, setCounterSt] = useState(0);

  useUpdateEffect(() => {
    console.log(counterSt);
  }, [counterSt]);

  return (
    <section>
      <h3>{counterSt}</h3>
      <button
        type="button"
        onClick={() => setCounterSt((prevCounterSt) => prevCounterSt + 1)}
      >
        +
      </button>
    </section>
  );
}
export default Component;
