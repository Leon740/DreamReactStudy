import React, { useRef } from 'react';
import useEventListener from './useEventListener';

function Component() {
  const buttonRf = useRef();

  useEventListener('click', (event) => console.log(event), buttonRf.current);
  useEventListener('resize', (event) => console.log(event), window);

  return (
    <button type="button" ref={buttonRf}>
      button
    </button>
  );
}
export default Component;
