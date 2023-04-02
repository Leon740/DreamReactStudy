/* eslint-disable no-unused-vars */
import { useEffect, useState, Dispatch, SetStateAction } from 'react';

function getStorageValueFn(key: string, initialValue: string): string {
  const savedValue: string | null = localStorage.getItem(key);

  if (savedValue) {
    return savedValue;
  }

  // if (initialValue instanceof Function) {
  //   return initialValue();
  // }

  return initialValue;
}

export default function useLocalStorage(
  key: string,
  initialValue: string
): [value: string, setValueFn: Dispatch<SetStateAction<string>>] {
  const [value, setValueFn] = useState<string>(() =>
    getStorageValueFn(key, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValueFn];
}
