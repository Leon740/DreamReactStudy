import React, { Profiler, useState } from 'react';
import useTimeout from './useTimeout';

function Component() {
  const TIMEOUT = 2000;
  const [countNumSt, setCountNumSt] = useState(5);

  const { resetFn, clearFn } = useTimeout(
    () => {
      console.log('reset');
      setCountNumSt((prev) => prev + 1);
    },
    TIMEOUT,
  );

  return (
    <Profiler id="count" onRender={() => console.log(countNumSt)}>
      <h3>{countNumSt}</h3>
      <button type="button" onClick={() => { clearFn(); }}>stop</button>
      <button type="button" onClick={() => { resetFn(); }}>run</button>
    </Profiler>
  );
}
export default Component;
