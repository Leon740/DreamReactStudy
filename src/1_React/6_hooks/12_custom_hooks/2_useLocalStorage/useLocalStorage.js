/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

function getStorageValueFn(key, initialValue) {
  const savedValue = localStorage.getItem(key);

  if (savedValue) {
    return savedValue;
  }

  // if (initialValue instanceof Function) {
  //   return initialValue();
  // }

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getStorageValueFn(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
