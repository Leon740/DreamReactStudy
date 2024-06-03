import React, { useState, useEffect } from 'react';
import useDebouncedValue from './useDebouncedValue';

const TIMEOUT_NUM = 2000;

function Input() {
  const [valueSt, setValueSt] = useState('Audi');
  const debouncedValue = useDebouncedValue(valueSt, TIMEOUT_NUM);

  useEffect(() => {
    console.log(`debouncedValue ${debouncedValue} after ${TIMEOUT_NUM}`);
  }, [debouncedValue]);

  return (
    <section>
      <h3>valueSt: {valueSt}</h3>
      <h3>debouncedValue: {debouncedValue}</h3>
      <input
        type="text"
        value={valueSt}
        onChange={(event) => setValueSt(event.target.value)}
      />
    </section>
  );
}
export default Input;
