import React, { forwardRef, useRef, useImperativeHandle } from 'react';

function Child(_, ref) {
  const rfInput1 = useRef();
  const rfInput2 = useRef();
  const rfInput3 = useRef();

  function fnInput1Red() {
    rfInput1.current.style.background = 'red';
  }
  function fnInput2Green() {
    rfInput2.current.style.background = 'green';
  }
  function fnInput3Blue() {
    rfInput3.current.style.background = 'blue';
  }

  // === Concept
  // Escape using useImperativeHandle
  // ref = parent ref
  // () => {  } = callback function which overrides the parent ref
  // [] = dependecies

  useImperativeHandle(ref, () => ({
    fnInput1Red: () => fnInput1Red(),
    fnInput2Green: () => fnInput2Green(),
    fnInput3Blue: () => fnInput3Blue(),
  }), []);

  return (
    <div ref={ref}>
      <input ref={rfInput1} />
      <input ref={rfInput2} />
      <input ref={rfInput3} />
    </div>
  );
}

export default forwardRef(Child);
