import { useEffect } from 'react';

export default function useLogger(variable) {
  useEffect(() => {
    console.log(variable);
  }, [variable]);
}
