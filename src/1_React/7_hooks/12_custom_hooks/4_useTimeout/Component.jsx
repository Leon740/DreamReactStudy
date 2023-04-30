import React, { Profiler, useState } from 'react';
import { Button } from 'react-bootstrap';
import useTimeout from './useTimeout';

function Component() {
  const [countNumSt, setCountNumSt] = useState(0);

  const [resetFn, clearFn] = useTimeout(() => {
    console.log('reset');
    setCountNumSt((prevCountNum) => prevCountNum + 1);
  }, 2000);

  return (
    <Profiler id="count" onRender={() => console.log(`render ${countNumSt}`)}>
      <h3>{countNumSt}</h3>
      <Button
        variant="success"
        onClick={() => {
          resetFn();
        }}
      >
        Run
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          clearFn();
        }}
      >
        Stop
      </Button>
    </Profiler>
  );
}

export default Component;
