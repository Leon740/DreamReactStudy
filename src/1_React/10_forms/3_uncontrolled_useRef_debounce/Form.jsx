import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Buttons from '../0_common/Buttons';
import { INPUTS, getFormInputsFn } from '../0_common/common';

function FormGroup({ name = '', label = '', type = 'text' }) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} />
    </Form.Group>
  );
}

function ExampleForm() {
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
    }, 1000);
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
    <Container className="mt-5">
      <h1>3_uncontrolled_useRef_debounce</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5} xxl={4}>
          <Form
            onSubmit={(event) => onSubmitFn(event)}
            onChange={(event) => onChangeFn(event)}
            onReset={onResetFn}
          >
            {INPUTS.map(({ id, name, label, type }) => (
              <FormGroup key={id} name={name} label={label} type={type} />
            ))}
            <Buttons />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ExampleForm;
