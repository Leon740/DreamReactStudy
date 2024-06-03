import React from 'react';

function Debug({ name = '', object = {}, className = '' }) {
  return (
    <section className={className}>
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
