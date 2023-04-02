import React, { Profiler, useState } from 'react';
import useDebounce from './useDebounce';

function Component1() {
  const [countNumSt, setCountNumSt] = useState(5);

  useDebounce(() => {
    console.log('debounce');
    console.log(countNumSt);
  }, 2000, [countNumSt]);

  return (
    <Profiler id="count" onRender={() => console.log(countNumSt)}>
      <h3>{countNumSt}</h3>
      <button type="button" onClick={() => { setCountNumSt(prev => prev + 1); }}>+</button>
    </Profiler>
  );
}
export default Component1;
