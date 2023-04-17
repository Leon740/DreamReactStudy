import React, { useState, useCallback, useRef, useMemo } from 'react';

import { SiMaildotru } from 'react-icons/si';

import { object, string, boolean } from 'yup';

import FormContext from './FormContext';

import InputWrapper from './Input/InputWrapper';
import CheckboxWrapper from './Checkbox/CheckboxWrapper';
import RadioGroup from './RadioGroup/RadioGroup';
import ButtonWrapper from './Button/ButtonWrapper';

const initialValues = {
  email: '',
  password: '',
  message: '',
  sex: '',
  terms: false
};

function fillFieldsFn(value) {
  const filledInputs = {};

  Object.keys(initialValues).forEach((name) => {
    filledInputs[name] = value;
  });

  return filledInputs;
}

const validationSchema = object().shape({
  email: string().email().required('Email is a required field'),
  password: string().min(8).required('Password is a required field'),
  message: string().min(15).required('Message is a required field'),
  sex: string().required('Sex is a required field'),
  terms: boolean().oneOf([true], 'Terms is a required field')
});

function Form({ onSubmitFnProp = (data) => console.log(data) }) {
  const [valuesSt, setValuesSt] = useState(() => initialValues);
  const [touchedSt, setTouchedSt] = useState(() => fillFieldsFn(false));
  const [errorsSt, setErrorsSt] = useState(() => fillFieldsFn(''));

  const validateInputFn = async (name, value) => {
    if (typeof value === 'string' && value.length > 1) {
      setTouchedSt((prev) => ({ ...prev, [name]: true }));

      const inputData = await validationSchema.fields[name]
        .validate(value, { abortEarly: false })
        .catch((error) => {
          setErrorsSt((prev) => ({ ...prev, [name]: error.message }));
        });

      if (inputData) {
        setErrorsSt((prev) => ({ ...prev, [name]: '' }));
      }
    } else {
      setTouchedSt((prev) => ({ ...prev, [name]: false }));
    }
  };

  const onChangeFn = useCallback((name, value) => {
    setValuesSt((prev) => ({ ...prev, [name]: value }));
    validateInputFn(name, value);
  }, []);

  function onResetFn() {
    setValuesSt(initialValues);
    setTouchedSt(fillFieldsFn(false));
    setErrorsSt(fillFieldsFn(''));
  }

  const onSubmitFn = useCallback(
    async (event) => {
      event.preventDefault();

      setTouchedSt(fillFieldsFn(true));

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
        onSubmitFnProp(JSON.stringify(formData));
        onResetFn();
      }
    },
    [valuesSt, onSubmitFnProp]
  );

  const emailRf = useRef();
  const passwordRf = useRef();
  const messageRf = useRef();
  const sexRf = useRef();
  const termsRf = useRef();

  const fieldsRefs = {
    email: emailRf,
    password: passwordRf,
    message: messageRf,
    sex: sexRf,
    terms: termsRf
  };

  const context = useMemo(() => {
    return { values: valuesSt, touched: touchedSt, errors: errorsSt, onChangeFn };
  }, [valuesSt, touchedSt, errorsSt, onChangeFn]);

  return (
    <div className="container mx-auto px-4">
      <FormContext.Provider value={context}>
        <form
          noValidate
          onSubmit={(event) => onSubmitFn(event)}
          onReset={onResetFn}
          onChange={(event) => console.log(event.target.name, event.target.value)}
        >
          <InputWrapper
            ref={fieldsRefs.email}
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            ariaLabel="email input"
            required
            description="Type in your email in format email@domain"
            icon={<SiMaildotru />}
          />
          {/* {touchedSt.email && !errorsSt.email && ( */}
          <InputWrapper
            ref={fieldsRefs.password}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            ariaLabel="password input"
            required
            description="Type in your password (min 8)"
          />
          {/* )} */}
          <InputWrapper
            ref={fieldsRefs.message}
            name="message"
            label="Message"
            type="textarea"
            placeholder="Enter your message"
            ariaLabel="message textarea"
            required
            description="Type in your message (min 8)"
          />
          <RadioGroup
            ref={fieldsRefs.sex}
            name="sex"
            label="Sex"
            type="radio"
            ariaLabel="sex radio"
            required
            description="Select your sex"
            variants={['male', 'female']}
          />
          <CheckboxWrapper
            ref={fieldsRefs.terms}
            name="terms"
            label="I accept Terms & Conditions"
            type="checkbox"
            ariaLabel="terms checkbox"
            required
            description={
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a href="#" className="underline">
                Read Terms & Conditions
              </a>
            }
          />

          <div className="flex justify-between">
            <ButtonWrapper type="submit" className="bg-green-500">
              Sign In
            </ButtonWrapper>
            <ButtonWrapper type="reset" className="bg-rose-500">
              Reset
            </ButtonWrapper>
          </div>

          <div className="flex -mx-4 mt-8">
            {Object.entries(fieldsRefs).map(([name, ref]) => (
              <ButtonWrapper
                key={`button__${name}`}
                type="button"
                className="bg-yellow-500 mx-4"
                onClick={() => ref.current.focus()}
              >
                focus on {name}
              </ButtonWrapper>
            ))}
          </div>
        </form>
      </FormContext.Provider>
    </div>
  );
}
export default Form;
