// === Concept
// Call function after typing is stopped for 2 sec

import { useEffect } from 'react';
import useTimeout from '../../5_useTimeout/useTimeout';

export default function useDebounce(callbackFn = () => {}, delayNum = 1000, dependenciesArr = []) {
  const [resetFn, clearFn] = useTimeout(() => {
    callbackFn();
  }, delayNum);

  useEffect(resetFn, [...dependenciesArr, resetFn]);

  // fix running timeout on the 1st render
  useEffect(clearFn, [clearFn]);
}
