import React, { useRef, useEffect } from 'react';
import useEventListener from './useEventListener';

function Component(): JSX.Element {
  const buttonRf = useRef<HTMLButtonElement>(null);

  useEventListener('click', (event) => console.log(event), buttonRf.current);
  useEventListener(
    'mouseover',
    (event) => console.log(event),
    buttonRf.current
  );

  return (
    <button type="button" ref={buttonRf}>
      click
    </button>
  );
}
export default Component;
