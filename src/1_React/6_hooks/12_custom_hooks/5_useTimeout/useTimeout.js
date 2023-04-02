import { useCallback, useEffect, useRef } from 'react';

export default function useTimeout(callbackFn, delaySecNum) {
  const callbackFnRef = useRef(callbackFn);
  const timeoutIdRef = useRef();

  useEffect(() => {
    callbackFnRef.current = callbackFn;
  }, [callbackFn]);

  const setFn = useCallback(() => {
    timeoutIdRef.current = setTimeout(() => callbackFnRef.current(), delaySecNum);
  }, [delaySecNum]);

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
  }, [setFn, clearFn, delaySecNum]);

  return { resetFn, clearFn };
}
