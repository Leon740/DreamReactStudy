import React, { useState } from 'react';
import ComponentsContext from './ComponentsContext';
import Child from './Child';

function Parent() {
  const [carName, setCarName] = useState('Evo 9');

  return (
    <ComponentsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ carName, setCarName }}
    >
      <code>Parent :</code>
      <p>
        My
        {' '}
        <u>Favorite</u>
        {' '}
        is
        {' '}
        <b>{carName}</b>
      </p>

      <Child />
    </ComponentsContext.Provider>
  );
}

export default Parent;
