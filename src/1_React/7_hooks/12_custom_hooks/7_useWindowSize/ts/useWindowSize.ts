import { useEffect, useState } from 'react';
import useDebounce from '../../5_useDebounce/1_good/ts/useDebounce';

interface IWindowSize {
  width: number;
  height: number;
}

function getWindowSizeFn(): IWindowSize {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export default function useWindowSize(delayNum: number = 1000): IWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>(() => getWindowSizeFn());

  const debouncedWindowWidth = useDebounce<number>(windowSize.width, delayNum);
  const debouncedWindowHeight = useDebounce<number>(windowSize.height, delayNum);

  // 1) mount: useEffect call
  // 2) resize: setWindowSize,
  // after useDebounce timeout finishes,
  // debouncedWindowWidth, debouncedWindowHeight get updated
  // 3) useEffect call

  useEffect(() => {
    console.log(`width = ${debouncedWindowWidth}`);
    console.log(`height = ${debouncedWindowHeight}`);

    function windowOnResizeFn(): void {
      console.log('resize occurs on every render');
      setWindowSize(getWindowSizeFn());
    }

    window.addEventListener('resize', windowOnResizeFn);

    return () => window.removeEventListener('resize', windowOnResizeFn);
  }, [debouncedWindowWidth, debouncedWindowHeight]);

  return { width: debouncedWindowWidth, height: debouncedWindowHeight };
}
