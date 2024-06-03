// === Concept
// Call function after typing is stopped for 2 sec

import { useRef, useEffect } from 'react';

export default function useDebouncedCallback(callbackFn, dependencies, delay) {
  // store (callbackFn) in (useRef) so it doesn't change on every render
  const callbackRf = useRef(callbackFn);

  useEffect(() => {
    const timeoutId = setTimeout(() => callbackRf.current(), delay);

    return () => clearTimeout(timeoutId);
  }, [...dependencies, delay]);
}
