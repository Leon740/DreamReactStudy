import React, { useState } from 'react';

function Car() {
  const [car, setCar] = useState('Evo');

  return (
    <div>
      <h3>
        Car is
        {car}
      </h3>

      <input value={car} onChange={(event) => setCar(event.target.value)} />
    </div>
  );
}

export default Car;
