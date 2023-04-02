import { useEffect, useRef } from 'react';

export default function useUpdateEffect(callbackFn, dependenciesArr) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      callbackFn();
    }
  }, [...dependenciesArr]);
}
