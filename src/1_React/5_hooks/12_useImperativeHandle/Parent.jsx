import React, { useRef } from 'react';
import Child from './Child';

function Parent() {
  const rfChild = useRef();

  console.log(rfChild);

  return (
    <div>
      <Child ref={rfChild} />

      <div>
        <button type="button" onClick={() => rfChild.current.fnInput1Red()}>make 1 input red</button>
      </div>

      <div>
        <button type="button" onClick={() => rfChild.current.fnInput2Green()}>make 2 input green</button>
      </div>

      <div>
        <button type="button" onClick={() => rfChild.current.fnInput3Blue()}>make 3 input blue</button>
      </div>
    </div>
  );
}

export default Parent;
