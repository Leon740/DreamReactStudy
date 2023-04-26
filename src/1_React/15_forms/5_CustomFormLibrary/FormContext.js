import { createContext, useContext } from 'react';

const FormContext = createContext();

export default FormContext;

export function useFieldContextValueFn(name) {
  const context = useContext(FormContext);

  const {
    touched: { [name]: isTouched },
    errors: { [name]: error },
    values: { [name]: value },
    onChangeFn,
    refs
  } = context;
  const ref = refs && refs[name];

  return {
    isTouched,
    error,
    value,
    onChangeFn,
    ref
  };
}

export function useFormContextValueFn() {
  return useContext(FormContext);
}
