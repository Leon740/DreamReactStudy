import { useState } from 'react';

export default function useToggle(
  initialValue: boolean
): [boolean, (value?: boolean) => void] {
  const [valueSt, setValueSt] = useState(initialValue);

  function toggleFn(value?: boolean): void {
    setValueSt((prevValueSt) =>
      typeof value === 'boolean' ? value : !prevValueSt
    );
  }

  return [valueSt, toggleFn];
}
