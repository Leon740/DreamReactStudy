import { useRef, useEffect } from 'react';

export default function useUpdateEffect(callbackFn, dependencies) {
  const firstRenderRf = useRef();
  const callbackFnRf = useRef(callbackFn);

  useEffect(() => {
    if (firstRenderRf.current) {
      firstRenderRf.current = false;
    } else {
      callbackFnRf.current();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
}
