import React, { useState } from 'react';
import useDebounce from './useDebounce';

function Component2() {
  const [inputStrSt, setInputStrSt] = useState('');

  useDebounce(() => {
    console.log('API call');
    console.log(inputStrSt);
  }, 2000, [inputStrSt]);

  return (
    <>
      <h3>{inputStrSt}</h3>
      <input value={inputStrSt} onChange={(event) => setInputStrSt(event.target.value)} />
    </>
  );
}
export default Component2;
