/* eslint-disable react/no-array-index-key */
import React from 'react';

function Child({ input }) {
  const list = [];

  // === Theory : complex logic
  for (let i = 0; i <= 20000; i += 1) {
    list.push(input);
  }

  return (
    <ul>{list.map((item, index) => <li key={index}>{item}</li>)}</ul>
  );
}
export default Child;
