import React, { useState } from 'react';
import useDebouncedCallback from './useDebouncedCallback';

const TIMEOUT_NUM = 2000;

function Input() {
  const [valueSt, setValueSt] = useState('Audi');

  const callbackFn = () => {
    console.log(`debounced API call after ${TIMEOUT_NUM}`);
    console.log(valueSt);
  };

  useDebouncedCallback(() => callbackFn(), [valueSt], TIMEOUT_NUM);

  return (
    <section>
      <h3>valueSt: {valueSt}</h3>
      <input
        type="text"
        value={valueSt}
        onChange={(event) => setValueSt(event.target.value)}
      />
    </section>
  );
}
export default Input;
