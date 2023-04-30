import { useEffect, useState } from 'react';
import useEventListener from '../3_useEventListener/useEventListener';
import useDebounce from '../5_useDebounce/useDebounce';

interface IWindowScroll {
  x: number;
  y: number;
}

interface IWindowScrollToFnArgs {
  top?: number;
  left?: number;
  behavior?: ScrollBehavior;
}

function getWindowScrollPositionFn(): IWindowScroll {
  return { x: window.scrollX, y: window.scrollY };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function useWindowScroll(
  delayNum: number = 1000
): [IWindowScroll, (options: IWindowScrollToFnArgs) => void] {
  const [windowScrollPositionSt, setWindowScrollPositionSt] =
    useState<IWindowScroll>(() => getWindowScrollPositionFn());

  const debouncedWindowScrollPositionX = useDebounce<number>(
    windowScrollPositionSt.x,
    delayNum
  );
  const debouncedWindowScrollPositionY = useDebounce<number>(
    windowScrollPositionSt.y,
    delayNum
  );

  useEffect(() => {
    console.log(`x = ${debouncedWindowScrollPositionX}`);
    console.log(`y = ${debouncedWindowScrollPositionY}`);

    function windowOnScrollFn(): void {
      console.log('scroll occurs on every render');
      setWindowScrollPositionSt(getWindowScrollPositionFn());
    }

    window.addEventListener('scroll', windowOnScrollFn);

    return () => window.removeEventListener('scroll', windowOnScrollFn);
  }, [debouncedWindowScrollPositionX, debouncedWindowScrollPositionY]);

  function windowScrollToFn(options: IWindowScrollToFnArgs): void {
    window.scroll(options);
    console.log(options);
  }

  return [
    {
      x: debouncedWindowScrollPositionX,
      y: debouncedWindowScrollPositionY
    },
    windowScrollToFn
  ];
}
