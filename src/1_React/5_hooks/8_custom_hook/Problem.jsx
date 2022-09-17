import React, { useState } from 'react';

function Problem() {
  // === Concept
  // === Problem
  // much similar code
  // === Solution
  // use custom hook for each input

  const [carName, setCarName] = useState('Mitsu Evo 9');
  const [carYear, setCarYear] = useState('2002');

  const changeCarNameFunc = (event) => {
    setCarName(event.target.value);
  };

  const changeCarYearFunc = (event) => {
    setCarYear(event.target.value);
  };

  return (
    <div>
      <section>
        <h3>
          Car
          {' '}
          <u>name</u>
          {' '}
          is
          {' '}
          {carName}
        </h3>
        <div>
          <input value={carName} onChange={changeCarNameFunc} />
        </div>
      </section>

      <section className="mt-5">
        <h3>
          Car
          {' '}
          <u>year</u>
          {' '}
          is
          {' '}
          {carYear}
        </h3>
        <div>
          <input value={carYear} onChange={changeCarYearFunc} />
        </div>
      </section>
    </div>
  );
}

export default Problem;
