// === Concept
// Call function after typing is stopped for 2 sec

import React, { Profiler, useState } from 'react';
import { Button } from 'react-bootstrap';
import useDebounce from './useDebounce';

const TIMEOUT_NUM = 2000;

function ButtonOnClick() {
  const [countNumSt, setCountNumSt] = useState(0);

  useDebounce(
    () => {
      console.log(`debounce after ${TIMEOUT_NUM}`);
      console.log(countNumSt);
    },
    TIMEOUT_NUM,
    [countNumSt]
  );

  return (
    <Profiler id="count" onRender={() => console.log(`render ${countNumSt}`)}>
      <h3>{countNumSt}</h3>
      <Button
        variant="success"
        onClick={() => {
          setCountNumSt((prevCount) => prevCount + 1);
        }}
      >
        +
      </Button>
    </Profiler>
  );
}

export default ButtonOnClick;
