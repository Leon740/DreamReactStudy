import React, { useState, useEffect } from 'react';
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
  const [formDataSt, setFormDataSt] = useState(() => getFormInputsFn());

  let timeout = -1;

  function onChangeFn(event) {
    clearTimeout(timeout);

    const { name, value } = event.target;

    // console.log(timeout);

    // reduce timeout in order to escape the empty inputs
    timeout = setTimeout(() => {
      setFormDataSt((prev) => ({ ...prev, [name]: value }));
    }, 1000);
  }

  function onResetFn() {
    setFormDataSt(getFormInputsFn());
  }

  function onSubmitFn(event) {
    event.preventDefault();

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
      <h1>1_uncontrolled_useState_debounce</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5} xxl={4}>
          <Form
            onSubmit={(event) => onSubmitFn(event)}
            onChange={(event) => onChangeFn(event)}
            onReset={onResetFn}
          >
            {INPUTS.map(({ id, name, type, label }) => (
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
