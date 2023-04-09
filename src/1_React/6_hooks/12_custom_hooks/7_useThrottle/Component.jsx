// === Concept
// Call function every 2 sec (even while typing)

import React, { useState, useEffect } from 'react';
import useThrottle from './useThrottle';

const TIMEOUT_NUM = 1000;

function Component() {
  const [inputStrSt, setInputStrSt] = useState('');

  const inputThrottledValueStr = useThrottle(inputStrSt);

  useEffect(() => {
    console.log(`throttle API call after ${TIMEOUT_NUM}`);
  }, [inputThrottledValueStr]);

  return (
    <>
      <h1>inputThrottledValueStr: {inputThrottledValueStr}</h1>
      <h2>inputStrSt: {inputStrSt}</h2>
      <input value={inputStrSt} onChange={(event) => setInputStrSt(event.target.value)} />
    </>
  );
}
export default Component;
