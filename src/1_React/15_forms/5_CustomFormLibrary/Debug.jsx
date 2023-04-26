import React from 'react';

function Debug({ name = '', object = {} }) {
  return (
    <section className="w-1/3">
      <h2 className="text-lg font-bold">{name}</h2>
      <ul>
        {Object.entries(object).map(([key, value]) => (
          <li key={key}>{`${key} : ${value}`}</li>
        ))}
      </ul>
    </section>
  );
}
export default Debug;
