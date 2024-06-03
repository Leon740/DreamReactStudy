import { useEffect, useRef } from 'react';

// eslint-disable-next-line no-unused-vars
type handlerFnT = (event: Event) => void;

export default function useEventListener(
  eventName: string,
  handlerFn: handlerFnT,
  element = window
) {
  const savedHandler = useRef<handlerFnT>();

  useEffect(() => {
    savedHandler.current = handlerFn;
  }, [handlerFn]);

  useEffect(() => {
    const eventListenerFn = (event: Event) =>
      savedHandler.current && savedHandler.current(event);

    element.addEventListener(eventName, (event) => eventListenerFn(event));

    return element.removeEventListener(eventName, (event) =>
      eventListenerFn(event)
    );
  }, [eventName, element]);
}
