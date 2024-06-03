import { useState } from 'react';

export default function useArray(initialArray) {
  const [arraySt, setArraySt] = useState(initialArray);

  const pushFn = (element) => {
    setArraySt((prevArraySt) => [...prevArraySt, element]);
  };

  const updateFn = (oldElement, newElement) => {
    setArraySt((prevArraySt) =>
      prevArraySt.map((element) =>
        element === oldElement ? newElement : element
      )
    );
  };

  const clearFn = () => setArraySt([]);

  const removeFn = (element) => {
    setArraySt((prevArraySt) => prevArraySt.filter((el) => el !== element));
  };

  const filterFn = (callbackFn) => {
    setArraySt((prevArraySt) => prevArraySt.filter(callbackFn));
  };

  return [
    arraySt,
    {
      pushFn,
      updateFn,
      clearFn,
      removeFn,
      filterFn
    }
  ];
}
