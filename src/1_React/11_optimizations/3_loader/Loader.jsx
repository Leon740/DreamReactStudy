import { useState, useEffect } from 'react';
// eslint-disable-next-line import/extensions
import { BiLoaderAlt } from 'react-icons/bi';

function Loader({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setTimeout(() => {
        setIsMounted(true);
      }, 2000);
    }
  }, []);

  return !isMounted ? <BiLoaderAlt className="animate-spin" /> : children;
}
export default Loader;
