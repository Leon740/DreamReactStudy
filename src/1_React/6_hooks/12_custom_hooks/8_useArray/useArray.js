import { useState } from 'react';

export default function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  function pushFn(element) {
    setArray(prevArr => [...prevArr, element]);
  }

  function updateFn(index, element) {
    setArray(prevArr => [
      ...prevArr.slice(0, index),
      element,
      ...prevArr.slice(index + 1, prevArr.length),
    ]);
  }

  function clearFn() {
    setArray([]);
  }

  function removeFn(index) {
    setArray(prevArr => [...prevArr.slice(0, index), ...prevArr.slice(index + 1, prevArr.length)]);
  }

  function filterFn(callback) {
    setArray(prevArr => prevArr.filter(callback));
  }

  return [
    array,
    {
      pushFn,
      updateFn,
      clearFn,
      removeFn,
      filterFn,
    },
  ];
}
