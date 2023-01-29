/* eslint-disable react/no-array-index-key */
import React from 'react';

function Child({ input }) {
  const LIST_SIZE = 20000;
  const list = [];

  // === Theory : complex logic
  for (let i = 0; i <= LIST_SIZE; i += 1) {
    list.push(input);
  }

  return (
    <ul>{list.map((item, index) => <li key={index}>{item}</li>)}</ul>
  );
}
export default Child;
