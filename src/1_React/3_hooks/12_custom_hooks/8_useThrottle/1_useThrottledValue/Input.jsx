import React, { useState, useEffect } from 'react';
import useThrottledValue from './useThrottledValue';

const TIMEOUT_NUM = 2000;

function Input() {
  const [valueSt, setValueSt] = useState('Audi');
  const throttledValue = useThrottledValue(valueSt, TIMEOUT_NUM);

  useEffect(() => {
    console.log(`throttledValue ${throttledValue} each ${TIMEOUT_NUM}`);
  }, [throttledValue]);

  return (
    <section>
      <h3>valueSt: {valueSt}</h3>
      <h3>throttledValue: {throttledValue}</h3>
      <input
        type="text"
        value={valueSt}
        onChange={(event) => setValueSt(event.target.value)}
      />
    </section>
  );
}
export default Input;
