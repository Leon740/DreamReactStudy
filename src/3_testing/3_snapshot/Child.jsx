import React from 'react';

function Child({ list }) {
  if (!list?.length) return null;

  return (
    <ul>
      {list.map((listItem, index) => <li key={index}>{listItem}</li>)}
    </ul>
  );
}

export default Child;
