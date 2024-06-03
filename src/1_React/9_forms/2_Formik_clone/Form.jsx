import React, { useState, useCallback, useMemo } from 'react';

import FormContext from './FormContext';

function fillInputsFn(initialValues, value) {
  const filledInputs = {};

  Object.keys(initialValues).forEach((name) => {
    filledInputs[name] = value;
  });

  return filledInputs;
}

function Form({
  initialValues,
  validationSchema,
  refs,
  handleSubmitFn,
  handleResetFn,
  renderForm
}) {
  const [valuesSt, setValuesSt] = useState(() => initialValues);
  const [touchedSt, setTouchedSt] = useState(() =>
    fillInputsFn(initialValues, false)
  );
  const [errorsSt, setErrorsSt] = useState(() =>
    fillInputsFn(initialValues, '')
  );

  const validateInputFn = useCallback(async (name, value) => {
    // Array.isArray(value) = CheckboxGroup
    if (
      (typeof value === 'string' && value.length > 1) ||
      Array.isArray(value)
    ) {
      setTouchedSt((prev) => ({ ...prev, [name]: true }));

      const inputData = await validationSchema.fields[name]
        .validate(value, { abortEarly: false })
        .catch((error) => {
          // console.log(error);
          setErrorsSt((prev) => ({ ...prev, [name]: error.message }));
        });

      if (inputData) {
        setErrorsSt((prev) => ({ ...prev, [name]: '' }));
      }
    } else {
      setTouchedSt((prev) => ({ ...prev, [name]: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeFn = useCallback(
    (name, value) => {
      setValuesSt((prev) => ({ ...prev, [name]: value }));
      validateInputFn(name, value);
    },
    [validateInputFn]
  );

  const onResetFn = useCallback(() => {
    setValuesSt(initialValues);
    setTouchedSt(fillInputsFn(initialValues, false));
    setErrorsSt(fillInputsFn(initialValues, ''));
    handleResetFn();
  }, []);

  const onSubmitFn = useCallback(async (event) => {
    event.preventDefault();

    setTouchedSt(fillInputsFn(initialValues, true));

    const formData = await validationSchema
      .validate(valuesSt, { abortEarly: false })
      .catch((err) => {
        const errors = err.inner.reduce(
          (acc, error) => ({
            ...acc,
            [error.path]: error.message
          }),
          {}
        );

        setErrorsSt((prev) => ({ ...prev, ...errors }));
      });

    if (formData) {
      handleSubmitFn(JSON.stringify(formData));
      event.target.submit();
      onResetFn();
    }
  }, []);

  const context = useMemo(
    () => ({
      values: valuesSt,
      touched: touchedSt,
      errors: errorsSt,
      onChangeFn,
      refs
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),
    [valuesSt, touchedSt, errorsSt, onChangeFn]
  );

  return (
    <div className="container mx-auto px-4">
      <FormContext.Provider value={context}>
        <form
          noValidate
          onSubmit={(event) => onSubmitFn(event)}
          onReset={onResetFn}
        >
          {renderForm({
            values: valuesSt,
            touched: touchedSt,
            errors: errorsSt
          })}
        </form>
      </FormContext.Provider>
    </div>
  );
}
export default Form;
