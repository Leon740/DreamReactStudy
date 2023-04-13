/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import Input from './Input';

// ref, state, icon, right, submit, yup

const INPUTS = [
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
    ariaLabel: 'Name',
    required: true,
    description: 'Name'
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    ariaLabel: 'Password',
    required: true,
    description: 'Password'
  }
];

function getFormInputsFn() {
  const formInputs = {};

  INPUTS.forEach((field) => {
    formInputs[field.name] = '';
  });

  return formInputs;
}

function SignIn({ onSubmitFnProp }) {
  const formDataRf = useRef(getFormInputsFn());

  let timeout = -1;

  function onChangeFn(event) {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    clearTimeout(timeout);

    // reduce timeout in order to escape the empty inputs
    timeout = setTimeout(() => {
      formDataRf.current = { ...formDataRf.current, [name]: value };
      console.log(formDataRf.current);
    }, 100);
  }

  function onResetFn() {
    formDataRf.current = getFormInputsFn();
  }

  function onSubmitFn(event) {
    event.preventDefault();

    let formIsValid = true;
    const formData = formDataRf.current;

    if (formData) {
      Object.values(formData).forEach((value) => {
        console.log(value);

        if (!value) {
          console.error('error');
          formIsValid = false;
        }
      });
    }

    if (formIsValid) {
      alert(JSON.stringify(formData));
      event.target.submit();
      // clean the form fields after submit
      onResetFn();
    }
  }

  return (
    <form
      className="container mx-auto px-4 -my-8"
      onSubmit={(event) => onSubmitFn(event)}
      onChange={(event) => onChangeFn(event)}
      onReset={onResetFn}
    >
      {INPUTS.map(({ id, name, label, type, placeholder, ariaLabel, required, description }) => (
        <Input
          key={id}
          id={id}
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          ariaLabel={ariaLabel}
          required={required}
          description={description}
          radius="md"
          size="md"
        />
      ))}
      <button type="submit" className="bg-green-500 text-white px-3 py-1.5 rounded-md">
        Sign In
      </button>
    </form>
  );
}
export default SignIn;
