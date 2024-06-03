import React from 'react';
import useArray from './useArray';

function Component() {
  const [array, { pushFn, updateFn, clearFn, removeFn, filterFn }] = useArray([
    1, 2, 3
  ]);

  return (
    <>
      <div>{array.join(', ')}</div>
      <button type="button" onClick={() => pushFn(array.length + 1)}>
        push
      </button>
      <button type="button" onClick={() => updateFn(3, 333)}>
        update 3
      </button>
      <button type="button" onClick={() => clearFn()}>
        clear
      </button>
      <button type="button" onClick={() => removeFn(1)}>
        remove 1
      </button>
      <button type="button" onClick={() => filterFn((element) => element < 3)}>
        filter &lt; 3
      </button>
    </>
  );
}
export default Component;
