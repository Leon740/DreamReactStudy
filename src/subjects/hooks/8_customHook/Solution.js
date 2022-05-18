import React, { useEffect, useState } from "react";

const useLogger = value => {
  useEffect(() => {
    console.log(`Value changed : ${value}`);
  }, [value]);
};

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    setValue(event.target.value);
  };

  return {
    // value: value,
    // onChange: onChange,
    // shorthand since (keyName) is the same as (varName)
    value,
    onChange,
  };
};

const Solution = () => {
  // Concept
  // Problem: much similar code
  // Solution: use custom hook for each input
  const carName = useInput("Mitsu Evo 9");

  useLogger(carName.value);

  const carYear = useInput(2002);

  useLogger(carYear.value);

  return (
    <div>
      <section>
        <h3>
          Car <u>name</u> is {carName.value}
        </h3>
        <div>
          {/* <input value={carName.value} onChange={carName.onChange} /> */}
          {/* shorthand: cause (carName) returns the same 2 keys we need */}
          <input {...carName} />
        </div>
      </section>

      <section>
        <h3>
          Car <u>year</u> is {carYear.value}
        </h3>
        <div>
          {/* <input value={carName.value} onChange={carName.onChange} /> */}
          {/* shorthand: cause (carName) returns the same 2 keys we need */}
          <input {...carYear} />
        </div>
      </section>
    </div>
  );
};

export default Solution;
