import React from 'react';

function CarSelect({ value = 'BMW M4 Coupe', onChange = () => {} }) {
  return (
    <div>
      <input id="input-id" value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}

export default CarSelect;
