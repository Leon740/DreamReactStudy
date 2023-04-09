import { useCallback, useEffect, useRef } from 'react';

export default function useTimeout(callbackFn = () => {}, delayNum = 1000) {
  const callbackRef = useRef(callbackFn);
  const timeoutIdRef = useRef();

  useEffect(() => {
    callbackRef.current = callbackFn;
  }, [callbackFn]);

  const setFn = useCallback(() => {
    timeoutIdRef.current = setTimeout(() => callbackRef.current(), delayNum);
  }, [delayNum]);

  const clearFn = useCallback(() => {
    clearTimeout(timeoutIdRef.current);
  }, []);

  const resetFn = useCallback(() => {
    clearFn();
    setFn();
  }, [clearFn, setFn]);

  useEffect(() => {
    setFn();

    return () => clearFn();
  }, [setFn, clearFn]);

  return [resetFn, clearFn];
}
