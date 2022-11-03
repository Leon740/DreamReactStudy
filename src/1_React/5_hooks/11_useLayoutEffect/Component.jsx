import React, { useState, useRef, useLayoutEffect } from 'react';

function Component() {
  const [stShow, setStShow] = useState(false);
  const rfButton = useRef();
  const rfPopup = useRef();

  // === Concept
  // Use useEffect in most of the cases
  // useEffect runs after all DOM updates
  // Use useLayoutEffect for DOM manipulations, when useEffect doesn't solve your issue
  // useLayoutEffect runs before all DOM updates

  useLayoutEffect(() => {
    if (rfButton.current && rfPopup.current) {
      const { bottom } = rfButton.current.getBoundingClientRect();
      rfPopup.current.style.top = `${bottom + 30}px`;
    }
  }, [stShow]);

  return (
    <div>
      <button type="button" onClick={() => setStShow((prev) => !prev)} ref={rfButton}>Click</button>

      {stShow && <div style={{ position: 'absolute' }} ref={rfPopup}>Bottom</div>}
    </div>
  );
}

export default Component;
