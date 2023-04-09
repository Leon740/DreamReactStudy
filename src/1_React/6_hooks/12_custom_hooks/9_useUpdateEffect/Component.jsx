import React, { useState } from 'react';
import useUpdateEffect from './useUpdateEffect';

function Component() {
  const [countNumSt, setCountNumSt] = useState(0);

  useUpdateEffect(() => {
    console.log(countNumSt);
  }, [countNumSt]);

  return (
    <>
      <h3>{countNumSt}</h3>
      <button type="button" onClick={() => setCountNumSt(prev => prev + 1)}>+</button>
    </>
  );
}
export default Component;
