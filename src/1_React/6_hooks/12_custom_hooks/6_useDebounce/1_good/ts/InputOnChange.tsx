// === Concept
// Call function after typing is stopped for 2 sec

import React, { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const TIMEOUT_NUM: number = 1000;

function InputOnChange(): JSX.Element {
  const [inputStrSt, setInputStrSt] = useState<string>('');
  const debouncedInputStr = useDebounce<string>(inputStrSt, TIMEOUT_NUM);

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
