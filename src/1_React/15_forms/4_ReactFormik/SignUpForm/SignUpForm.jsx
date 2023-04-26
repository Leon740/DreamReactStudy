/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// Formik & Yup
import { Formik, Field } from 'formik';
import { string, object, bool } from 'yup';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// SignUpForm
import RequiredAsterisk from '../RequiredAsterisk/RequiredAsterisk';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './SignUpForm.scss';

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

function SignUpForm() {
  const yupConfirmPassword = (passwordKey = 'password') => {
    return string().when(passwordKey, (values) => {
      const [passwordValue] = values;
      console.log(values);
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

  return (
    <div className="signup-form">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} xl={5} xxl={4}>
            <Formik
              initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                terms: false
              }}
              validationSchema={object({
                email: string().email(getErrorMsgFn('email')).required(getErrorMsgFn('required')),
                password: string()
                  .min(8, getErrorMsgFn('minLength'))
                  .required(getErrorMsgFn('required')),
                confirmPassword: yupConfirmPassword('password'),
                terms: bool()
                  .required(getErrorMsgFn('required'))
                  .oneOf([true], getErrorMsgFn('required'))
              })}
              onSubmit={(values, { setIsSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setIsSubmitting(false);
                }, 400);
              }}
            >
              {({ handleSubmit, values }) => (
                <Form className="form-inner" onSubmit={handleSubmit} noValidate>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>
                      Email
                      <RequiredAsterisk />
                    </Form.Label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={values.email}
                      required
                      aria-label="email"
                      className="form-control"
                    />
                    <ErrorMessage component="div" name="email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>
                      Password
                      <RequiredAsterisk />
                    </Form.Label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={values.password}
                      required
                      aria-label="password"
                      className="form-control"
                    />
                    <ErrorMessage component="div" name="password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>
                      Confirm password
                      <RequiredAsterisk />
                    </Form.Label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your Password"
                      value={values.confirmPassword}
                      required
                      aria-label="confirmPassword"
                      className="form-control"
                    />
                    <ErrorMessage component="div" name="confirmPassword" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="terms">
                    <label htmlFor="terms">
                      <Field id="terms" name="terms" type="checkbox" required aria-label="terms" />
                      Terms
                    </label>
                    <ErrorMessage component="div" name="terms" />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="success" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpForm;
