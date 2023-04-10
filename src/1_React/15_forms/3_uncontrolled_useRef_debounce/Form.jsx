import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function FormGroup({ name = '', label = '', type = 'text' }) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} />
    </Form.Group>
  );
}

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

function ExampleForm() {
  const formDataRf = useRef(getFieldsFn());

  let timeout = -1;

  function onChangeFn(event) {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      formDataRf.current = { ...formDataRf.current, [name]: value };
      console.log(formDataRf.current);
    }, 1000);
  }

  function onResetFn() {
    formDataRf.current = getFieldsFn();
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
    <Container className="mt-5">
      <h1>3_uncontrolled_useRef_debounce</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5} xxl={4}>
          <Form
            onSubmit={(event) => onSubmitFn(event)}
            onChange={(event) => onChangeFn(event)}
            onReset={onResetFn}
          >
            {FIELDS.map((field, index) => (
              <FormGroup key={index} name={field.name} label={field.label} type={field.type} />
            ))}
            <Stack direction="horizontal" gap={3} className="justify-content-between">
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" type="reset">
                Reset
              </Button>
            </Stack>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ExampleForm;
