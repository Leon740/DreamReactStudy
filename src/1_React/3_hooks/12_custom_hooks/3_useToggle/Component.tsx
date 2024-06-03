import React from 'react';
import useToggle from './useToggle';

function Component() {
  const [stateSt, setStateSt] = useToggle(false);

  return (
    <section>
      <h3>stateSt: {stateSt.toString()}</h3>
      <button type="button" onClick={() => setStateSt()}>
        toggle
      </button>
      <button type="button" onClick={() => setStateSt(false)}>
        false
      </button>
      <button type="button" onClick={() => setStateSt(true)}>
        true
      </button>
    </section>
  );
}

export default Component;
