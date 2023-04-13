/* eslint-disable no-shadow */
import useDebounce from '1_React/6_hooks/12_custom_hooks/5_useDebounce/1_good/useDebounce';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

function FormGroup({
  name = '',
  label = '',
  type = 'text',
  value = '',
  onChangeFn = () => {},
  formReset
}) {
  const [inputSt, setInputSt] = useState({ name, value });
  const debouncedValue = useDebounce(inputSt.value, 1000);

  // reset logic:
  // if (isFormResetSt)
  // clean (inputSt)
  // (isFormResetSt): true => false
  const [isFormResetSt, setIsFormResetSt] = formReset;

  useEffect(() => {
    // console.log(isFormResetSt);
    if (isFormResetSt) {
      setInputSt({ name, value: '' });
      setIsFormResetSt((prev) => !prev);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormResetSt]);

  useEffect(() => {
    onChangeFn(inputSt.name, debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={inputSt.value}
        onChange={(event) => setInputSt({ name: event.target.name, value: event.target.value })}
      />
    </Form.Group>
  );
}

export default FormGroup;
