// === Concept
// Call function every 2 sec (even while typing)

import { useEffect, useRef } from 'react';

export default function useThrottledCallback(callbackFn, dependencies, delay) {
  // store (callbackFn) in (useRef) so it doesn't change on every render
  const callbackRf = useRef(callbackFn);

  useEffect(() => {
    callbackRf.current = callbackFn;
  }, [callbackFn]);

  const lastExecutionTimeRf = useRef(Date.now());

  const updateOnTimeoutFn = () => {
    console.log('updateOnTimeout');
    callbackRf.current();
    lastExecutionTimeRf.current = Date.now();
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // const secondsPassedNum = (Date.now() - timeOfLastExecutionsRef.current) / 1000;
    // console.log(secondsPassedNum);
    // const throttleTime = secondsPassedNum + intervalNum / 1000;
    // console.log(throttleTime);

    if (Date.now() >= lastExecutionTimeRf.current + delay) {
      // if time now is bigger than the time of the last(prev) exec + interval
      console.log('if');
      updateOnTimeoutFn();
    } else {
      console.log('else');
      const timeoutId = setTimeout(() => {
        updateOnTimeoutFn();
      }, delay);

      // clear timer after it's completed
      return () => clearTimeout(timeoutId);
    }
    // updateOnTimeoutFn
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, delay]);
}
