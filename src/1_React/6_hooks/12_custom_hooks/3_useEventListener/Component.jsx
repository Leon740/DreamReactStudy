import React, { useRef } from 'react';
import useEventListener from './useEventListener';

function Component() {
  const buttonRf = useRef();
  useEventListener('click', (event) => console.log(event), buttonRf.current);
  useEventListener('mouseover', (event) => console.log(event), buttonRf.current);

  return (
    <>
      <button type="button" ref={buttonRf}>
        click
      </button>
      test
    </>
  );
}
export default Component;
