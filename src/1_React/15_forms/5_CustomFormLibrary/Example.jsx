import React, { useRef } from 'react';

import { object, string, ref } from 'yup';

import { SiMaildotru } from 'react-icons/si';

import Form from './Form';
import InputWrapper from './Input/InputWrapper';
import CheckboxWrapper from './Checkbox/CheckboxWrapper';
import RadioGroup from './RadioGroup/RadioGroup';
import ButtonWrapper from './Button/ButtonWrapper';

function getErrorMsgFn(validationName, minChar = 8) {
  let msg = '';

  switch (validationName) {
    case 'required':
      msg = 'This field is required.';
      break;
    case 'email':
      msg = 'Please enter a valid email.';
      break;
    case 'minChar':
      msg = `Please enter at least ${minChar} characters.`;
      break;
    case 'confirmPassword':
      msg = "The passwords don't match.";
      break;
    default:
      msg = 'This field is required.';
  }

  return msg;
}

function Example() {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    message: '',
    sex: '',
    terms: 'off'
  };

  const validationSchema = object().shape({
    email: string().email(getErrorMsgFn('email')).required(getErrorMsgFn('required')),
    password: string().min(8, getErrorMsgFn('minChar', 8)).required(getErrorMsgFn('required')),
    confirmPassword: string().oneOf([ref('password'), null], getErrorMsgFn('confirmPassword')),
    message: string().min(15, getErrorMsgFn('minChar', 15)).required(getErrorMsgFn('required')),
    sex: string().required(getErrorMsgFn('required')),
    terms: string().oneOf(['on'], getErrorMsgFn('required'))
  });

  console.log(ref('password'));

  const emailRf = useRef();
  const passwordRf = useRef();
  const messageRf = useRef();
  const sexRf = useRef();
  const termsRf = useRef();

  const refs = {
    email: emailRf,
    password: passwordRf,
    message: messageRf,
    sex: sexRf,
    terms: termsRf
  };

  const onSubmitFn = (formData) => {
    alert('onSubmitFn');
    alert(formData);
  };

  const onResetFn = () => {
    alert('onResetFn');
  };

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      refs={refs}
      handleSubmitFn={onSubmitFn}
      handleResetFn={onResetFn}
    >
      <InputWrapper
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
      <InputWrapper
        name="message"
        label="Message"
        type="textarea"
        placeholder="Enter your message"
        ariaLabel="message textarea"
        required
        description="Type in your message (min 8)"
      />
      <RadioGroup
        name="sex"
        label="Sex"
        type="radio"
        ariaLabel="sex radio"
        required
        description="Select your sex"
        options={['male', 'female']}
      />
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

      <div className="flex -mx-4 mt-8">
        {Object.entries(refs).map(([name, refItem]) => (
          <ButtonWrapper
            key={`button__${name}`}
            type="button"
            className="bg-yellow-500 mx-4"
            onClick={() => refItem.current.focus()}
          >
            focus on {name}
          </ButtonWrapper>
        ))}
      </div>
    </Form>
  );
}
export default Example;
