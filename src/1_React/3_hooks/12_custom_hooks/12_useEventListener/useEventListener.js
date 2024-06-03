import { useEffect, useRef } from 'react';

export default function useEventListener(
  eventName,
  handlerFn,
  element = window
) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handlerFn;
  }, [handlerFn]);

  useEffect(() => {
    const eventListenerFn = (event) => savedHandler.current(event);

    element.addEventListener(eventName, (event) => eventListenerFn(event));

    return element.removeEventListener(eventName, (event) =>
      eventListenerFn(event)
    );
  }, [eventName, element]);
}
