import { useEffect, useState } from 'react';

export default function useLocalStorage(key) {
  const [value, setValue] = useState(localStorage.getItem(key));

  function setItemFn() {
    setValue(String(Date.now()));
    localStorage.setItem(key, value);
  }

  function removeItemFn() {
    setValue('');
    localStorage.removeItem(key);
  }

  useEffect(() => {
    setItemFn(key);
  }, [key]);

  return [value, { setItemFn, removeItemFn }];
}
