import React, { useState, useCallback } from 'react';

function fillFieldsFn(initialValues, value) {
  const filledInputs = {};

  Object.keys(initialValues).forEach((name) => {
    filledInputs[name] = value;
  });

  return filledInputs;
}

function Form({ initialValues, validationSchema, handleSubmitFn, handleResetFn, renderForm }) {
  const [valuesSt, setValuesSt] = useState(() => initialValues);
  const [touchedSt, setTouchedSt] = useState(() => fillFieldsFn(initialValues, false));
  const [errorsSt, setErrorsSt] = useState(() => fillFieldsFn(initialValues, ''));

  const validateInputFn = async (name, value) => {
    // Array.isArray(value) = CheckboxGroup
    if ((typeof value === 'string' && value.length > 1) || Array.isArray(value)) {
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
  };

  const onChangeFn = (name, value) => {
    setValuesSt((prev) => ({ ...prev, [name]: value }));
    validateInputFn(name, value);
  };

  function onResetFn() {
    setValuesSt(initialValues);
    setTouchedSt(fillFieldsFn(initialValues, false));
    setErrorsSt(fillFieldsFn(initialValues, ''));
    handleResetFn();
  }

  const onSubmitFn = useCallback(
    async (event) => {
      event.preventDefault();

      setTouchedSt(fillFieldsFn(initialValues, true));

      const formData = await validationSchema
        .validate(valuesSt, { abortEarly: false })
        .catch((err) => {
          const errors = err.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: error.message
            };
          }, {});

          setErrorsSt((prev) => ({ ...prev, ...errors }));
        });

      if (formData) {
        handleSubmitFn(JSON.stringify(formData));
        event.target.submit();
        onResetFn();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [valuesSt]
  );

  return (
    <form noValidate onSubmit={(event) => onSubmitFn(event)} onReset={onResetFn}>
      {renderForm({ values: valuesSt, touched: touchedSt, errors: errorsSt, onChangeFn })}
    </form>
  );
}
export default Form;
