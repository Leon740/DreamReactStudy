import React, { useEffect, useState } from 'react';

const useLogger = (value) => {
  useEffect(() => {
    console.log(`Value changed : ${value}`);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onReset = () => setValue('');

  return {
    bind: { value, onChange },
    value,
    reset: onReset,
  };
};

function SolutionM() {
  const carName = useInput('Mitsu Evo 9');

  useLogger(carName.value);

  const carYear = useInput(2002);

  useLogger(carYear.value);

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
          {carName.value}
        </h3>
        <div>
          <input {...carName.bind} />
          <button className="btn btn-danger" onClick={carName.reset}>
            Reset
          </button>
        </div>
      </section>

      <section>
        <h3>
          Car
          {' '}
          <u>name</u>
          {' '}
          is
          {' '}
          {carYear.value}
        </h3>
        <div>
          <input {...carYear.bind} />
          <button className="btn btn-danger" onClick={carYear.reset}>
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}

export default SolutionM;
