/* eslint-disable react/no-array-index-key */
import React, { useState, useTransition } from 'react';

// === Concept
// === Problem
// (React) gathers all of the state updates to one state and call (render) once with all of the state updates
// (React) waits until all of the code including complex logic is executed
// Because of this (App) gets stuck after each input update
// === Solution
// [isPending, startTransition] = useTransition();
// Put complex code in (startTransition)
// (isPending) is (true) while (startTransition) works
// (isPending) is (false) when (startTransition) finishes working
// In this case we have one (render) on (listArrSt) update, and one (render) on (stList) update
// Because of separating renders (App) doesn't get stuck
// (listArrSt) gets higher priority in updates, after (listArrSt) finishes updates, (React) will work on updating (listArrSt)

function Solution() {
  const [inputStrSt, setInputStrSt] = useState('');
  const [listArrSt, setListArrSt] = useState([]);
  const [isPending, startTransition] = useTransition();

  function inputOnChangeFn(keywordStr) {
    setInputStrSt(keywordStr);

    startTransition(() => {
      const listArr = [];
      for (let i = 0; i < 20000; i++) {
        listArr.push(keywordStr);
      }

      setListArrSt(listArr);
    });
  }

  return (
    <section>
      <h2>Solution</h2>
      <input value={inputStrSt} onChange={(event) => inputOnChangeFn(event.target.value)} />
      {isPending ? (
        <h3>Loading</h3>
      ) : (
        <ul>
          {listArrSt.map((listItemStr, index) => <li key={index}>{listItemStr}</li>)}
        </ul>
      )}
    </section>
  );
}

export default Solution;
