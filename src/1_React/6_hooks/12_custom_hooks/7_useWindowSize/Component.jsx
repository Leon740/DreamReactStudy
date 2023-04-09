import React from 'react';
import useWindowSize from './useWindowSize';

function Component() {
  const { width, height } = useWindowSize(1000);

  return (
    <>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </>
  );
}

export default Component;
