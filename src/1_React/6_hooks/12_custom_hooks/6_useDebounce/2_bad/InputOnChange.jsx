// === Concept
// Call function after typing is stopped for 2 sec

import React, { useState } from 'react';
import useDebounce from './useDebounce';

const TIMEOUT_NUM = 2000;

function InputOnChange() {
  const [inputStrSt, setInputStrSt] = useState('');

  useDebounce(
    () => {
      console.log(`API call after ${TIMEOUT_NUM}`);
      console.log(inputStrSt);
    },
    2000,
    [inputStrSt]
  );

  return (
    <>
      <h3>{inputStrSt}</h3>
      <input value={inputStrSt} onChange={(event) => setInputStrSt(event.target.value)} />
    </>
  );
}
export default InputOnChange;
