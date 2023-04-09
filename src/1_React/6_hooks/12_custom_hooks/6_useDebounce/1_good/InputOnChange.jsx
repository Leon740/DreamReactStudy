// === Concept
// Call function after typing is stopped for 2 sec

import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const TIMEOUT_NUM = 1000;

function InputOnChange() {
  const [inputStrSt, setInputStrSt] = useState('');
  const debouncedInputStr = useDebounce(inputStrSt, TIMEOUT_NUM);

  useEffect(() => {
    console.log(`debounce API call after ${TIMEOUT_NUM}`);
  }, [debouncedInputStr]);

  return (
    <>
      <h1>debouncedInputStr: {debouncedInputStr}</h1>
      <h2>inputStrSt: {inputStrSt}</h2>
      <input value={inputStrSt} onChange={(event) => setInputStrSt(event.target.value)} />
    </>
  );
}
export default InputOnChange;
