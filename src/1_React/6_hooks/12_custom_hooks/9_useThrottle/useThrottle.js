import { useEffect, useRef, useState } from 'react';

export default function useThrottle(valueAny, intervalSecNum = 1000) {
  // eslint-disable-next-line no-unused-vars
  const [throttledValue, setThrottledValue] = useState(valueAny);
  const timeOfLastExecutions = useRef(Date.now());

  const intervalUpdate = () => {
    console.log('interval');
    setThrottledValue(valueAny);
    timeOfLastExecutions.current = Date.now();
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (Date.now() >= timeOfLastExecutions.current + intervalSecNum) {
      // if time now is bigger than the time of the last(prev) exec + interval
      intervalUpdate();
    } else {
      const timerIdNum = setTimeout(() => {
        intervalUpdate();
      }, intervalSecNum);

      // clear timer after it's completed
      return () => clearTimeout(timerIdNum);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueAny, intervalSecNum]);

  return throttledValue;
}
