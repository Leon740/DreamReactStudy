// === Concept
// Call function after typing is stopped for 2 sec

import { useState, useEffect } from 'react';

export default function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedValueSt, setDebouncedValueSt] = useState(value);

  useEffect(() => {
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(
      () => setDebouncedValueSt(value),
      delay
    );

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValueSt;
}
