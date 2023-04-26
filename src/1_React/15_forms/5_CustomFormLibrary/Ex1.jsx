import React from 'react';

import { object, string } from 'yup';

import Form from './Form';
import { useFormContextValueFn } from './FormContext';
import InputWrapper from './Input/InputWrapper';
import CheckboxWrapper from './Checkbox/CheckboxWrapper';
import ButtonWrapper from './Button/ButtonWrapper';

function getErrorMsgFn(validationName, minLength = 8) {
  let msg = '';

  switch (validationName) {
    case 'required':
      msg = 'This field is required.';
      break;
    case 'email':
      msg = 'Please enter a valid email.';
      break;
    case 'minLength':
      msg = `Please enter at least ${minLength} characters.`;
      break;
    case 'confirmPassword':
      msg = "The passwords don't match.";
      break;
    default:
      msg = 'This field is required.';
  }

  return msg;
}

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  terms: 'off'
};

function Test() {
  console.log(useFormContextValueFn());
  return <>test</>;
}

function Ex1() {
  const yupConfirmPassword = (passwordKey = 'password') => {
    return string().when(passwordKey, (values) => {
      console.log(values);
      const [passwordValue] = values;
      // const passwordValue = valuesSt[passwordKey];
      console.log(passwordValue);

      if (passwordValue) {
        console.log('if');
        return string().test(
          'confirmPassword',
          getErrorMsgFn('confirmPassword'),
          (confirmPasswordValue) => {
            console.log(`passwordValue = ${passwordValue}`);
            console.log(`confirmPasswordValue = ${confirmPasswordValue}`);
            return passwordValue === confirmPasswordValue;
          }
        );
      }

      console.log('else');
      return string().required(getErrorMsgFn('required'));
    });
  };
  const validationSchema = object().shape({
    email: string().email(getErrorMsgFn('email')).required(getErrorMsgFn('required')),
    password: string().min(8, getErrorMsgFn('minLength', 8)).required(getErrorMsgFn('required')),
    // confirmPassword: string().oneOf(
    //   [useContextValueFn('password').value],
    //   getErrorMsgFn('confirmPassword')
    // ),
    confirmPassword: yupConfirmPassword('password'),
    terms: string().oneOf(['on'], getErrorMsgFn('required'))
  });

  // console.log(useFormContextValueFn());

  return (
    <Form initialValues={initialValues} validationSchema={validationSchema}>
      {/* {touchedSt.email && !errorsSt.email && ( */}
      <Test />
      <InputWrapper
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        ariaLabel="email input"
        required
        description="Type in your email (min 8)"
      />
      <InputWrapper
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        ariaLabel="password input"
        required
        description="Type in your password (min 8)"
      />
      <InputWrapper
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        ariaLabel="confirm password input"
        required
        description="Type in your password (min 8)"
      />
      {/* )} */}
      <CheckboxWrapper
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
    </Form>
  );
}
export default Ex1;
