import { useEffect } from 'react';
import useTimeout from '../5_useTimeout/useTimeout';

export default function useDebounce(callbackFn, delaySecNum, dependenciesArr) {
  const { resetFn, clearFn } = useTimeout(callbackFn, delaySecNum);

  useEffect(resetFn, [...dependenciesArr, resetFn]);

  // fix running timeout on the 1st render
  useEffect(() => clearFn(), [clearFn]);
}
