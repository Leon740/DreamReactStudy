import { useState, useEffect } from 'react';

interface IWindowSize {
  width: number;
  height: number;
}

function getWindowSize(): IWindowSize {
  if (typeof window === 'undefined') {
    // Return a default size if `window` is not available (for server-side rendering)
    return { width: 0, height: 0 };
  }

  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export function useWindowSize() {
  const [windowSizeSt, setWindowSizeSt] = useState<IWindowSize>(() => getWindowSize());

  useEffect(() => {
    const handleWindowOnResize = () => {
      setWindowSizeSt(getWindowSize());
    };

    window.addEventListener('resize', handleWindowOnResize);

    return () => window.removeEventListener('resize', handleWindowOnResize);
  }, []);

  return windowSizeSt;
}
