import { useRef, useEffect, useCallback } from 'react';

export default function useInterval(callbackFn, delay) {
  // store (callbackFn) in (useRef) so it doesn't change on every render
  const callbackRf = useRef(callbackFn);

  useEffect(() => {
    callbackRf.current = callbackFn;
  }, [callbackFn]);

  // store (intervalIdRf) in (useRef) so it doesn't change on every render
  const intervalIdRf = useRef();

  // (useCallback) so we don't change this func on every render
  // start initial interval
  const startFn = useCallback(() => {
    intervalIdRf.current = setInterval(callbackRf.current, delay);
  }, [delay]);

  // stop current interval
  const stopFn = useCallback(() => {
    clearInterval(intervalIdRf.current);
  }, []);

  // start new interval
  const resetFn = useCallback(() => {
    // stop current interval before
    stopFn();
    // then start new interval
    startFn();
  }, [stopFn, startFn]);

  // start initial interval
  useEffect(() => {
    startFn();

    return () => stopFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);

  return [resetFn, stopFn];
}
