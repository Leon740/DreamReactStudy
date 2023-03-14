import React, {
  useState, useRef, useEffect, useLayoutEffect,
} from 'react';

// === Concept
// Use useEffect in most of the cases
// useEffect runs after all DOM updates
// Use useLayoutEffect for DOM manipulations, when useEffect doesn't solve your issue
// useLayoutEffect runs before all DOM updates

function Component() {
  const [stModal, setStModal] = useState(false);
  const rfBtn = useRef();
  const rfModal = useRef();

  useEffect(() => {
    if (rfBtn.current && rfModal.current) {
      const { bottom } = rfBtn.current.getBoundingClientRect();
      rfModal.current.style.top = `${bottom * 5 + 30}px`;
    }
  }, [stModal]);

  // useLayoutEffect runs before useEffect

  useEffect(() => {
    console.log('useEffect 1');
  });
  useEffect(() => {
    console.log('useEffect 2');
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect 1');
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect 2');
  });

  return (
    <div>
      <button type="button" onClick={() => setStModal((prev) => !prev)} ref={rfBtn}>{stModal ? 'hide' : 'show'}</button>
      {stModal && (
      <div
        style={{
          position: 'absolute', background: 'black', height: '100px', width: '100px',
        }}
        ref={rfModal}
      >
        Modal
      </div>
      )}
    </div>
  );
}

export default Component;
