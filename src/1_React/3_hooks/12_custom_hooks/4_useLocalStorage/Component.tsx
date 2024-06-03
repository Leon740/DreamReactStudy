import React from 'react';
import useLocalStorage from './useLocalStorage';

interface CarInputStorageI {
  name: string;
  year: number;
}

function CarInput() {
  const [value, setValue] = useLocalStorage('Car', {
    name: 'Audi',
    year: 2024
  });

  return (
    <section>
      <h3>{value.name}</h3>
      <input
        type="text"
        value={value.name}
        onChange={(event) =>
          setValue((prevValue: CarInputStorageI) => ({
            ...prevValue,
            name: event.target.value
          }))
        }
      />
      <input
        type="text"
        value={value.year}
        onChange={(event) =>
          setValue((prevValue: CarInputStorageI) => ({
            ...prevValue,
            year: event.target.value
          }))
        }
      />
    </section>
  );
}

export default CarInput;
