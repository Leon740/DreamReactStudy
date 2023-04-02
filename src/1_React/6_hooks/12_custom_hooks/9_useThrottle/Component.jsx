/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useThrottle from './useThrottle';

function Component() {
  const [inputStrSt, setInputStrSt] = useState('');

  const inputThrottleValueStr = useThrottle(inputStrSt);

  return (
    <>
      <h3>{inputThrottleValueStr}</h3>
      <input value={inputStrSt} onChange={(event) => setInputStrSt(event.target.value)} />
    </>
  );
}
export default Component;
