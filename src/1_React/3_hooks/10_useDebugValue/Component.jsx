import React from 'react';
import useWindowDimensions from './useWindowDimensions';

function Component() {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <div>
        width :
        {' '}
        {width}
      </div>
      <div>
        height :
        {' '}
        {height}
      </div>
    </div>
  );
}

export default Component;
