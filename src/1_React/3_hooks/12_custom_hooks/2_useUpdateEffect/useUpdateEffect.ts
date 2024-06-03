import { useRef, useEffect } from 'react';

export default function useUpdateEffect<T>(
  callbackFn: () => void,
  dependencies: T[]
) {
  const firstRenderRf = useRef<boolean>(true);
  const callbackFnRf = useRef<() => void>(callbackFn);

  useEffect(() => {
    if (firstRenderRf.current) {
      firstRenderRf.current = false;
    } else {
      callbackFnRf.current();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
}
