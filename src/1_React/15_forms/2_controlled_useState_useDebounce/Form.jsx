import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import RBForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from './FormGroup';

const FIELDS = [
  {
    name: 'name',
    type: 'text',
    label: 'name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'password'
  }
];

function getFieldsFn() {
  const fields = {};

  FIELDS.forEach((field) => {
    fields[field.name] = '';
  });

  return fields;
}

function Form() {
  const [formDataSt, setFormDataSt] = useState(() => getFieldsFn());

  function inputOnChangeFn(name, value) {
    // console.log(name);
    // console.log(value);
    setFormDataSt((prev) => ({ ...prev, [name]: value }));
  }

  // reset logic:
  // click on reset btn
  // (isFormResetSt): false => true
  const [isFormResetSt, setIsFormResetSt] = useState(false);

  function onResetFn() {
    // console.log('reset');
    setIsFormResetSt((prev) => !prev);
    setFormDataSt(getFieldsFn());
  }

  function onSubmitFn(event) {
    event.preventDefault();

    // to test, decrease the debounce time in FormGroup
    let formIsValid = true;

    Object.values(formDataSt).forEach((value) => {
      console.log(value);

      if (!value) {
        console.error('error');
        formIsValid = false;
      }
    });

    if (formIsValid) {
      alert(JSON.stringify(formDataSt));
      event.target.submit();
      // clean the form fields after submit
      onResetFn();
    }
  }

  useEffect(() => {
    console.log('formDataSt', formDataSt);
  }, [formDataSt]);

  return (
    <Container className="mt-5">
      <h1>2_controlled_useState_useDebounce</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5} xxl={4}>
          <RBForm onSubmit={(event) => onSubmitFn(event)} onReset={onResetFn}>
            {FIELDS.map((field, index) => (
              <FormGroup
                key={index}
                name={field.name}
                label={field.label}
                type={field.type}
                value={formDataSt[field.name]}
                onChangeFn={inputOnChangeFn}
                formReset={[isFormResetSt, setIsFormResetSt]}
              />
            ))}
            <Stack direction="horizontal" gap={3} className="justify-content-between">
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" type="reset">
                Reset
              </Button>
            </Stack>
          </RBForm>
        </Col>
      </Row>
    </Container>
  );
}

export default Form;
