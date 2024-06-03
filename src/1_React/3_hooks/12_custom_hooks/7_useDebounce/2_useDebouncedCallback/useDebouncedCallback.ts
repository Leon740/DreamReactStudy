// === Concept
// Call function after typing is stopped for 2 sec

import { useRef, useEffect } from 'react';

export default function useDebouncedCallback<T>(
  callbackFn: () => void,
  dependencies: Array<T>,
  delay: number
) {
  // store (callbackFn) in (useRef) so it doesn't change on every render
  const callbackRf = useRef<() => void>(callbackFn);

  useEffect(() => {
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(
      () => callbackRf.current(),
      delay
    );

    return () => clearTimeout(timeoutId);
    // React Hook useEffect has a spread element in its dependency array. This means we can't statically verify whether you've passed the correct dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, delay]);
}
