import React from 'react';

// Formik & Yup
import { Formik } from 'formik';
import * as Yup from 'yup';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// SignUpForm
import RequiredAsterisk from '../RequiredAsterisk/RequiredAsterisk';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './SignUpForm.scss';

function SignUpForm() {
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
                terms: false,
              }}
              validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('required'),
                password: Yup.string().min(8, 'Must be 8 characters or more').required('required'),
                confirmPassword: Yup.string().min(8, 'Must be 8 characters or more').required('required'),
                terms: Yup.bool().required('required').oneOf([true], 'Terms must be accepted'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Form className="form-inner" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>
                      Email
                      <RequiredAsterisk />
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                    />
                    <ErrorMessage component="div" name="email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>
                      Password
                      <RequiredAsterisk />
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.password && !errors.password}
                    />
                    <ErrorMessage component="div" name="password" />
                  </Form.Group>

                  {touched.password && !errors.password && (
                    <Form.Group className="mb-3" controlId="confirmPassword">
                      <Form.Label>
                        Confirm password
                        <RequiredAsterisk />
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Re-enter password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.confirmPassword && !errors.confirmPassword}
                      />
                      <ErrorMessage component="div" name="confirmPassword" />
                      <div className="form-error">{touched.confirmPassword && !errors.confirmPassword && values.password !== values.confirmPassword && 'passwords do not match'}</div>
                    </Form.Group>
                  )}

                  <Form.Group className="mb-4" controlId="password">
                    <Form.Check
                      id="terms"
                      name="terms"
                      label="Agree to terms and conditions"
                      value={values.terms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.terms && !!errors.terms}
                    />
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
