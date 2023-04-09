import { useState } from 'react';

export default function useToggle(initialState) {
  const [state, setState] = useState(initialState);

  function toggleState(value) {
    // eslint-disable-next-line no-confusing-arrow
    setState((prev) => typeof value === 'boolean' ? value : !prev);
  }

  return [state, toggleState];
}
