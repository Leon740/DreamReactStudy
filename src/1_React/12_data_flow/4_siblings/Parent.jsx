import React, { useState } from 'react';
import Sibling1 from './Sibling1';
import Sibling2 from './Sibling2';

function Parent() {
  const [carName, setCarName] = useState('Evo 9');

  return (
    <div>
      <Sibling1 carName={carName} />
      <Sibling2 carName={carName} setCarName={setCarName} />
    </div>
  );
}

export default Parent;
