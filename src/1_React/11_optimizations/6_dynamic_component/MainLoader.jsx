import React, { useState, useEffect } from 'react';
import Loader from './Loader';

function MainLoader({ children }) {
  const [isMountedSt, setIsMountedSt] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMountedSt(true);
    }, 2000);
  }, []);

  return !isMountedSt ? <Loader /> : children;
}
export default MainLoader;
