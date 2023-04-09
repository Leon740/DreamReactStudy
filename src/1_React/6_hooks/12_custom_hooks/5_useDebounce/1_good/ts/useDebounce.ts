// === Concept
// Call function after typing is stopped for 2 sec

import { useEffect, useState } from 'react';

export default function useDebounce<T>(value: T, delayNum: number = 1000): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(
      () => setDebouncedValue(value),
      delayNum
    );

    return () => clearTimeout(timeoutId);
  }, [value, delayNum]);

  return debouncedValue;
}
