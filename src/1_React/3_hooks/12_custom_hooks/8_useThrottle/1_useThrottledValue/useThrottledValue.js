// === Concept
// Call function every 2 sec (even while typing)

import { useState, useEffect, useRef } from 'react';

export default function useThrottledValue(value, delay) {
  const [throttledValueSt, setThrottledValueSt] = useState(value);
  const lastExecutionTimeRf = useRef(Date.now());

  const updateOnTimeoutFn = () => {
    console.log('updateOnTimeout');
    setThrottledValueSt(value);
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
  }, [value, delay]);

  return throttledValueSt;
}
