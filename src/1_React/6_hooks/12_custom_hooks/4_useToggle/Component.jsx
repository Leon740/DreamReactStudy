import React from 'react';
import useToggle from './useToggle';

function Component() {
  const [state, toggleState] = useToggle(false);
  return (
    <>
      <h2>{`state is ${state}`}</h2>
      <button type="button" onClick={() => toggleState()}>toggle</button>
      <button type="button" onClick={() => toggleState(true)}>true</button>
      <button type="button" onClick={() => toggleState(false)}>false</button>
    </>
  );
}
export default Component;
