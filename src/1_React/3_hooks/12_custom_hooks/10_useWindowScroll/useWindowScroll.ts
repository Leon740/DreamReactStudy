import { useState, useEffect } from 'react';
import useDebouncedValue from '../7_useDebounce/1_useDebouncedValue/useDebouncedValue';

interface WindowScrollI {
  x: number;
  y: number;
}

interface WindowScrollToFnI {
  x?: number;
  y?: number;
  // eslint-disable-next-line no-undef
  behavior: ScrollBehavior;
}

function getWindowScrollPositionFn(): WindowScrollI {
  const { scrollX: x, scrollY: y } = window;

  return { x, y };
}

export default function useWindowScroll(
  delay: number
): [WindowScrollI, (options: WindowScrollToFnI) => void] {
  const [scrollPositionSt, setScrollPositionSt] = useState(() =>
    getWindowScrollPositionFn()
  );

  const debouncedWindowScrollPositionX = useDebouncedValue(
    scrollPositionSt.x,
    delay
  );
  const debouncedWindowScrollPositionY = useDebouncedValue(
    scrollPositionSt.y,
    delay
  );

  const handleWindowOnScrollFn = () => {
    console.log('handleWindowOnScrollFn');
    console.log(getWindowScrollPositionFn());
    setScrollPositionSt(getWindowScrollPositionFn());
  };

  useEffect(() => {
    window.addEventListener('scroll', () => handleWindowOnScrollFn());

    return () =>
      window.removeEventListener('scroll', () => handleWindowOnScrollFn());
  }, [debouncedWindowScrollPositionX, debouncedWindowScrollPositionY]);

  const windowScrollToFn = (options: WindowScrollToFnI) => {
    window.scroll(options);
  };

  return [
    { x: debouncedWindowScrollPositionX, y: debouncedWindowScrollPositionY },
    windowScrollToFn
  ];
}
