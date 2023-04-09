import { useCallback, useEffect, useRef } from 'react';

export default function useTimeout(
  callbackFn: () => void,
  delayNum: number = 1000
): [resetFn: () => void, clearFn: () => void] {
  const callbackRef = useRef<() => void>(callbackFn);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout>>();

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
