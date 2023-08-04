import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [carName, setCarName] = useState('Evo 9');

  return (
    <div>
      <Child carName={carName} />
      <input
        value={carName}
        onChange={(event) => setCarName(event.target.value)}
      />
    </div>
  );
}

export default Parent;
