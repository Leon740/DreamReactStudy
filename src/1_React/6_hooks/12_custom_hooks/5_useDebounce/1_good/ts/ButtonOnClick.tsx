// === Concept
// Call function after typing is stopped for 2 sec

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useDebounce from './useDebounce';

const TIMEOUT_NUM: number = 1000;

function ButtonOnClick(): JSX.Element {
  const [countNumSt, setCountNumSt] = useState<number>(0);
  const debouncedCountNum = useDebounce<number>(countNumSt, TIMEOUT_NUM);

  useEffect(() => {
    console.log(`debounce after ${TIMEOUT_NUM}`);
  }, [debouncedCountNum]);

  return (
    <>
      <h1>debouncedCountNum: {debouncedCountNum}</h1>
      <h2>countNumSt: {countNumSt}</h2>
      <Button
        variant="success"
        onClick={() => {
          setCountNumSt((prevCount) => prevCount + 1);
        }}
      >
        +
      </Button>
    </>
  );
}

export default ButtonOnClick;
