import React, { useState } from 'react';

function Problem() {
  const [carState, setCarState] = useState({
    title: 'Mitsubishi Lancer Evolution 9',
    year: '2005',
  });

  const updateCarTitleFunc = (titleValue) => {
    setCarState((prev) => ({
      ...prev,
      title: titleValue,
    }));
  };

  return (
    <div>
      Car is
      {' '}
      <pre>{JSON.stringify(carState)}</pre>
      <button
        type="button"
        onClick={() => {
          updateCarTitleFunc('Evo 9');
        }}
      >
        Set Car to &quot;Evo 9&quot;
      </button>
    </div>
  );
}

export default Problem;
