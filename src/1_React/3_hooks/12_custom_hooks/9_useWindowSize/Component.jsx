import React from 'react';
import useWindowSize from './2_useDebouncedWindowSize';

const TIMEOUT_NUM = 2000;

function Component() {
  const { width, height } = useWindowSize(TIMEOUT_NUM);

  return (
    <section>
      <h3>
        width {width} height {height}
      </h3>
    </section>
  );
}
export default Component;
