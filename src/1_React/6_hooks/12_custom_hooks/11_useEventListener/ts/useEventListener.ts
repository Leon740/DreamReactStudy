import { useRef, useEffect, useLayoutEffect } from 'react';

export default function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element: HTMLElement | null | typeof window = window
): void {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useLayoutEffect(() => {
    console.log(element);
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event): void =>
      savedHandler.current && savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    // eslint-disable-next-line consistent-return
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [element, eventName]);
}
