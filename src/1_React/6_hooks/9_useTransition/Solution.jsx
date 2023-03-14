/* eslint-disable react/no-array-index-key */
import React, { useState, useTransition } from 'react';

function Solution() {
  // === Concept
  // === Problem
  // (React) gathers all of the state updates to one state and call (render) once with all of the state updates
  // (React) waits until all of the code including complex code is executed
  // Because of this (App) gets stuck after input update
  // === Solution
  // [isPending, startTransition] = useTransition();
  // Put complex code in (startTransition)
  // (isPending) is (true) while (startTransition) works
  // (isPending) is (false) when (startTransition) finishes working
  // In this case we have one (render) on (stInput) update, and one (render) on (stList) update
  // Because of separating renders (App) doesn't get stuck
  // (stInput) gets higher priority in updates, after (stInput) finishes updates, (React) will work on updating (stList)

  const [stInput, setStInput] = useState('');
  const [stList, setStList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  function fnInputOnChange(value) {
    setStInput(value);

    // === Theory : complex logic
    startTransition(() => {
      const list = [];

      for (let i = 0; i <= LIST_SIZE; i += 1) {
        list.push(value);
      }

      setStList(list);
    });
  }

  return (
    <div>
      <input value={stInput} onChange={(event) => fnInputOnChange(event.target.value)} />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {stList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}

export default Solution;
