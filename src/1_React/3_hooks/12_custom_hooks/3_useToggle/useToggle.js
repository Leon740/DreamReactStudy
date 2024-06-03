import { useState } from 'react';

export default function useToggle(initialValue) {
  const [valueSt, setValueSt] = useState(initialValue);

  function toggleFn(value) {
    setValueSt((prevValueSt) =>
      typeof value === 'boolean' ? value : !prevValueSt
    );
  }

  return [valueSt, toggleFn];
}
