// === Concept
// Call function every 2 sec (even while typing)

import { useEffect, useRef, useState } from 'react';

export default function useThrottle(value, intervalNum = 1000) {
  const [throttledValue, setThrottledValue] = useState(value);
  const timeOfLastExecutionsRef = useRef(Date.now());

  const intervalUpdateFn = () => {
    console.log('interval');
    setThrottledValue(value);
    timeOfLastExecutionsRef.current = Date.now();
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // const secondsPassedNum = (Date.now() - timeOfLastExecutionsRef.current) / 1000;
    // console.log(secondsPassedNum);
    // const throttleTime = secondsPassedNum + intervalNum / 1000;
    // console.log(throttleTime);

    if (Date.now() >= timeOfLastExecutionsRef.current + intervalNum) {
      // if time now is bigger than the time of the last(prev) exec + interval
      intervalUpdateFn();
      console.log('if');
    } else {
      console.log('else');
      const timerIdNum = setTimeout(() => {
        intervalUpdateFn();
      }, intervalNum);

      // clear timer after it's completed
      return () => clearTimeout(timerIdNum);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, intervalNum]);

  return throttledValue;
}
