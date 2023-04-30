import React, { useState, useEffect } from 'react';

function Loader() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // will be executed on mount
    if (!isMounted) {
      setTimeout(() => {
        setIsMounted(true);
      }, 2000);
    }
  }, []);

  return (
    <section>
      {!isMounted ? (
        <h1 style={{ color: 'red' }}>Loading ...</h1>
      ) : (
        <h1 style={{ color: 'blue' }}>Mounted</h1>
      )}
    </section>
  );
}
export default Loader;
