import { useState } from 'react';

type pushFnT<T> = (element: T) => void;
type updateFnT<T> = (oldElement: T, newElement: T) => void;
type removeFnT<T> = (element: T) => void;
type filterFnT = (callbackFn: () => void) => void;

export default function useArray<T>(initialArray: T[]): [
  T[],
  {
    pushFn: pushFnT<T>;
    updateFn: updateFnT<T>;
    clearFn: () => void;
    removeFn: removeFnT<T>;
    filterFn: filterFnT;
  }
] {
  const [arraySt, setArraySt] = useState(initialArray);

  const pushFn: pushFnT<T> = (element) => {
    setArraySt((prevArraySt) => [...prevArraySt, element]);
  };

  const updateFn: updateFnT<T> = (oldElement, newElement) => {
    setArraySt((prevArraySt) =>
      prevArraySt.map((element) =>
        element === oldElement ? newElement : element
      )
    );
  };

  const clearFn = () => setArraySt([]);

  const removeFn: removeFnT<T> = (element) => {
    setArraySt((prevArraySt) => prevArraySt.filter((el) => el !== element));
  };

  const filterFn: filterFnT = (callbackFn) => {
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
