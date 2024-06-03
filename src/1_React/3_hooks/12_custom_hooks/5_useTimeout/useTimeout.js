import { useRef, useEffect, useCallback } from 'react';

export default function useTimeout(callbackFn, delay) {
  // store (callbackFn) in (useRef) so it doesn't change on every render
  const callbackRf = useRef(callbackFn);

  useEffect(() => {
    callbackRf.current = callbackFn;
  }, [callbackFn]);

  // store (timeoutIdRf) in (useRef) so it doesn't change on every render
  const timeoutIdRf = useRef();

  // (useCallback) so we don't change this func on every render
  // start initial timeout
  const startFn = useCallback(() => {
    timeoutIdRf.current = setTimeout(callbackRf.current, delay);
  }, [delay]);

  // stop current timeout
  const stopFn = useCallback(() => {
    clearTimeout(timeoutIdRf.current);
  }, []);

  // start new timeout
  const resetFn = useCallback(() => {
    // stop current timeout before
    stopFn();
    // then start new timeout
    startFn();
  }, [stopFn, startFn]);

  // start initial timeout
  useEffect(() => {
    startFn();

    return () => stopFn();
  }, [delay]);

  return [resetFn, stopFn];
}
