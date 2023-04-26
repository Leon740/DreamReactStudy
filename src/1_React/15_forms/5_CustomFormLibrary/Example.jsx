import React, { useRef } from 'react';

import { object, string } from 'yup';

import { SiMaildotru } from 'react-icons/si';

import Form from './Form';
import Debug from './Debug';
import InputWrapper from './Input/InputWrapper';
import CheckboxWrapper from './Checkbox/CheckboxWrapper';
// import CheckboxGroup from './Checkbox/CheckboxGroup';
import RadioGroup from './Radio/RadioGroup';
import ButtonWrapper from './Button/ButtonWrapper';

import { getErrorMsgFn } from './utils';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  message: '',
  sex: '',
  terms: 'off',
  hobbies: []
};

function Example() {
  const emailRf = useRef();
  const passwordRf = useRef();
  const confirmPasswordRf = useRef();
  const messageRf = useRef();
  const sexRf = useRef();
  const termsRf = useRef();
  // const hobbiesRf = useRef();

  const refs = {
    email: emailRf,
    password: passwordRf,
    confirmPassword: confirmPasswordRf,
    message: messageRf,
    sex: sexRf,
    terms: termsRf
    // hobbies: hobbiesRf
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
      validationSchema={object().shape({
        email: string().email(getErrorMsgFn('email')).required(getErrorMsgFn('required')),
        password: string()
          .min(8, getErrorMsgFn('minLength', 8))
          .required(getErrorMsgFn('required')),
        confirmPassword: string().when('password', () => {
          if (passwordRf.current.value) {
            // console.log('if');
            return string().oneOf([passwordRf.current.value], getErrorMsgFn('confirmPassword'));
          }

          // console.log('else');
          return string().required(getErrorMsgFn('required'));
        }),
        message: string()
          .min(15, getErrorMsgFn('minLength', 15))
          .required(getErrorMsgFn('required')),
        sex: string().required(getErrorMsgFn('required')),
        terms: string().oneOf(['on'], getErrorMsgFn('required'))
        // hobbies: string().required(getErrorMsgFn('required'))
      })}
      refs={refs}
      handleSubmitFn={onSubmitFn}
      handleResetFn={onResetFn}
      renderForm={({ values, touched, errors, onChangeFn }) => {
        return (
          <div>
            <div className="flex">
              <Debug name="values" object={values} />
              <Debug name="touched" object={touched} />
              <Debug name="errors" object={errors} />
            </div>

            <InputWrapper
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              ariaLabel="email input"
              required
              description="Type in your email (min 8)"
              icon={<SiMaildotru />}
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
            {values.password.length > 1 && !errors.password && (
              <InputWrapper
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                ariaLabel="confirm password input"
                required
                description="Type in your password (min 8)"
              />
            )}
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
              required
              description="Select your sex"
              options={['male', 'female']}
            />
            <div className="my-8">
              <CheckboxWrapper
                id="terms"
                name="terms"
                label="I accept Terms & Conditions"
                ariaLabel="terms checkbox"
                required
                description={
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a href="#" className="underline">
                    Read Terms & Conditions
                  </a>
                }
                value={values.terms}
                onChangeFn={onChangeFn}
              />
            </div>
            {/* <CheckboxGroup
              name="hobbies"
              label="Hobbies"
              required
              description="Select your hobbies"
              options={['coding', 'driving', 'reading', 'surfing']}
            /> */}

            <div className="flex justify-between">
              <ButtonWrapper type="submit" className="bg-green-500">
                Sign In
              </ButtonWrapper>
              <ButtonWrapper type="reset" className="bg-rose-500">
                Reset
              </ButtonWrapper>
            </div>

            <div className="flex -mx-4 mt-8">
              {Object.entries(refs).map(([name, ref]) => {
                return ref.current ? (
                  <ButtonWrapper
                    key={`button__${name}`}
                    type="button"
                    className="bg-yellow-500 mx-4"
                    onClick={() => ref.current.focus()}
                  >
                    focus on {name}
                  </ButtonWrapper>
                ) : null;
              })}
            </div>
          </div>
        );
      }}
    />
  );
}
export default Example;
