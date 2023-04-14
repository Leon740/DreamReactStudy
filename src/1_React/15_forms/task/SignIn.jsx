/* eslint-disable react/button-has-type */
import React, { useState, useCallback } from 'react';
import { SiMaildotru } from 'react-icons/si';
import { object, string } from 'yup';
import Input from './Input';

function Button({ type = '', className = '', children }) {
  return (
    <button type={type} className={`text-white px-3 py-1.5 rounded-md ${className}`}>
      {children}
    </button>
  );
}

const INPUTS = [
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    ariaLabel: 'email input',
    required: true,
    description: 'Type in your Email in format email@domain',
    icon: <SiMaildotru />
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    ariaLabel: 'password input',
    required: true,
    description: 'Type in your Password (min 8)'
  }
];

function getFormInputsFn(value) {
  const formInputs = {};

  INPUTS.forEach(({ name }) => {
    formInputs[name] = value;
  });

  return formInputs;
}

const formSchema = object().shape({
  email: string().email().required('Email is a required field'),
  password: string().min(8).required('Password is a required field')
});

function SignIn({ onSubmitFnProp = (data) => console.log(data) }) {
  const [formValuesSt, setFormValuesSt] = useState(() => getFormInputsFn(''));
  const [formTouchedSt, setFormTouchedSt] = useState(() => getFormInputsFn(false));
  const [formErrorsSt, setFormErrorsSt] = useState(() => getFormInputsFn(''));

  const validateInput = async (name, value) => {
    if (value.length > 1) {
      setFormTouchedSt((prev) => ({ ...prev, [name]: true }));

      const inputData = await formSchema.fields[name]
        .validate(value, { abortEarly: false })
        .catch((error) => {
          setFormErrorsSt((prev) => ({ ...prev, [name]: error.message }));
        });

      if (inputData) {
        setFormErrorsSt((prev) => ({ ...prev, [name]: '' }));
      }
    } else {
      setFormTouchedSt((prev) => ({ ...prev, [name]: false }));
    }
  };

  function inputOnChangeFn(name, value) {
    setFormValuesSt((prev) => ({ ...prev, [name]: value }));
    validateInput(name, value);
  }

  const [isFormResetSt, setIsFormResetSt] = useState(false);
  function onResetFn() {
    setFormValuesSt(getFormInputsFn(''));
    setFormTouchedSt(getFormInputsFn(false));
    setFormErrorsSt(getFormInputsFn(''));
    setIsFormResetSt((prev) => !prev);
  }

  const onSubmitFn = useCallback(
    async (event) => {
      event.preventDefault();

      setFormTouchedSt(getFormInputsFn(true));

      const formData = await formSchema
        .validate(formValuesSt, { abortEarly: false })
        .catch((err) => {
          const errors = err.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: error.message
            };
          }, {});

          setFormErrorsSt((prev) => ({ ...prev, ...errors }));
        });

      if (formData) {
        onSubmitFnProp(JSON.stringify(formData));
        onResetFn();
      }
    },
    [formValuesSt]
  );

  const [sizeSt, setSizeSt] = useState('md');

  return (
    <div className="container mx-auto px-4">
      <div className="flex mt-8">
        <p>Size</p>
        <select value={sizeSt} onChange={(event) => setSizeSt(event.target.value)}>
          {['xs', 'sm', 'md', 'lg'].map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={(event) => onSubmitFn(event)} onReset={onResetFn} noValidate>
        {INPUTS.map(
          ({ id, name, label, type, placeholder, ariaLabel, required, description, icon }) => (
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
              radius="rounded-md"
              size={sizeSt}
              icon={icon}
              touched={formTouchedSt[name]}
              error={formErrorsSt[name]}
              value={formValuesSt[name]}
              onChangeFn={inputOnChangeFn}
              formReset={[isFormResetSt, setIsFormResetSt]}
            />
          )
        )}

        <div className="flex justify-between">
          <Button type="submit" className="bg-green-500">
            Sign In
          </Button>
          <Button type="reset" className="bg-rose-500">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
