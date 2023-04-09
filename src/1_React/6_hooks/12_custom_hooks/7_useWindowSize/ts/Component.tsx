import React from 'react';
import useWindowSize from './useWindowSize';

const TIMEOUT_NUM: number = 1000;

function Component(): JSX.Element {
  const { width, height } = useWindowSize(TIMEOUT_NUM);

  return (
    <>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </>
  );
}

export default Component;
