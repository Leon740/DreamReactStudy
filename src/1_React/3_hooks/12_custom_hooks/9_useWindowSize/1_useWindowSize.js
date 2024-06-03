import { useState, useEffect } from 'react';

function getWindowSizeFn() {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export default function useWindowSize() {
  const [windowSizeSt, setWindowSizeSt] = useState(() => getWindowSizeFn());

  const handleWindowOnResizeFn = () => {
    console.log('handleWindowOnResizeFn');
    console.log(getWindowSizeFn());
    setWindowSizeSt(getWindowSizeFn());
  };

  useEffect(() => {
    window.addEventListener('resize', () => handleWindowOnResizeFn());

    return () =>
      window.removeEventListener('resize', () => handleWindowOnResizeFn());
  }, []);

  return windowSizeSt;
}
