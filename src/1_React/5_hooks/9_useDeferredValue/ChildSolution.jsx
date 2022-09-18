/* eslint-disable react/no-array-index-key */
import React, { useDeferredValue, useEffect } from 'react';

function ChildSolution({ input }) {
  // === Concept
  // === Problem
  // Complex logic runs each time we update input
  // Because of this (App) gets stuck after input update
  // === Solution
  // useDeferredValue
  // useDeferredValue waits around 100 milliseconds after input finishes updating (typing stopped for more than 100 ms)
  // (updating input) gets higher priority in updates, after finishing (updating input), (React) will work on executing complex logic

  const LIST_SIZE = 20000;
  const list = [];
  const deferredInput = useDeferredValue(input);

  // === Theory : complex logic
  for (let i = 0; i <= LIST_SIZE; i += 1) {
    list.push(deferredInput);
  }

  useEffect(() => {
    console.log(`input : ${input}`);
    console.log(`deferredInput : ${deferredInput}`);
  }, [input, deferredInput]);

  return (
    <ul>{list.map((item, index) => <li key={index}>{item}</li>)}</ul>
  );
}
export default ChildSolution;
