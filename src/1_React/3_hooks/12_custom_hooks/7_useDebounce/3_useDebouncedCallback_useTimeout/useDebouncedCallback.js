// === Concept
// Call function after typing is stopped for 2 sec

import { useEffect } from 'react';
import useTimeout from '../../4_useTimeout/useTimeout';

export default function useDebouncedCallback(callbackFn, dependencies, delay) {
  const [startFn, stopFn] = useTimeout(() => callbackFn(), delay);

  useEffect(startFn, [...dependencies, startFn]);

  // fix running timeout on the 1st render
  useEffect(stopFn, [stopFn]);
}
