import React, { useContext } from 'react';
import ComponentsContext from './ComponentsContext';
import GrandChild from './GrandChild';

function Child() {
  const { carName } = useContext(ComponentsContext);

  return (
    <>
      <code>Child :</code>
      <p>
        My
        {' '}
        <u>Dream</u>
        {' '}
        is
        {' '}
        <b>{carName}</b>
      </p>

      <GrandChild />
    </>
  );
}

export default Child;
