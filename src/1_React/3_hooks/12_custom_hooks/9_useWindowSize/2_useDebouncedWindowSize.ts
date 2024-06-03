import { useState, useEffect } from 'react';
import useDebouncedValue from '../7_useDebounce/1_useDebouncedValue/useDebouncedValue';

interface WindowSizeI {
  width: number;
  height: number;
}

function getWindowSizeFn(): WindowSizeI {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export default function useWindowSize(delay: number) {
  const [windowSizeSt, setWindowSizeSt] = useState(() => getWindowSizeFn());

  const debouncedWindowWidth = useDebouncedValue(windowSizeSt.width, delay);
  const debouncedWindowHeight = useDebouncedValue(windowSizeSt.height, delay);

  const handleWindowOnResizeFn = () => {
    console.log('handleWindowOnResizeFn');
    console.log(getWindowSizeFn());
    setWindowSizeSt(getWindowSizeFn());
  };

  useEffect(() => {
    console.log(`width = ${debouncedWindowWidth}`);
    console.log(`height = ${debouncedWindowHeight}`);

    window.addEventListener('resize', () => handleWindowOnResizeFn());

    return () =>
      window.removeEventListener('resize', () => handleWindowOnResizeFn());
  }, [debouncedWindowWidth, debouncedWindowHeight]);

  return { width: debouncedWindowWidth, height: debouncedWindowHeight };
}
