import { createContext, useContext } from 'react';

const FormContext = createContext();

export default FormContext;

export function useContextValueFn(name) {
  const {
    touched: { [name]: isTouched },
    errors: { [name]: error },
    values: { [name]: value },
    onChangeFn
  } = useContext(FormContext);

  return {
    isTouched,
    error,
    value,
    onChangeFn
  };
}