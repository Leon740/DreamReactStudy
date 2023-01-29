/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RBForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from './FormGroup';
import './Form.scss';

function Form() {
  const FIELDS = [
    {
      name: 'name',
      type: 'text',
      label: 'name',
    },
    {
      name: 'email',
      type: 'email',
      label: 'email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'password',
    },
  ];

  const [stFields, setStFields] = useState({
    name: '',
    email: '',
    password: '',
  });

  let timeout = -1;

  function fieldsOnChange(fieldName, fieldValue) {
    clearTimeout(timeout);

    console.log(timeout);

    timeout = setTimeout(() => {
      setStFields((prev) => ({ ...prev, [fieldName]: fieldValue }));
    }, 1000);
  }

  function onSubmit(event) {
    event.preventDefault();

    let isValid = true;

    for (let i = 0; i < Object.values(stFields).length; i++) {
      if (!Object.values(stFields)[i]) {
        console.error('error');
        isValid = false;
      }
    }

    if (isValid) {
      alert(JSON.stringify(stFields));
      event.target.submit();
    }
  }

  useEffect(() => {
    console.log(JSON.stringify(stFields));
  }, [stFields]);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={5} xxl={4}>
          <RBForm onSubmit={(event) => onSubmit(event)}>
            {FIELDS.map((field, index) => <FormGroup key={index} name={field.name} type={field.type} label={field.label} onChange={fieldsOnChange} />)}
            <Button variant="success" type="submit">
              Submit
            </Button>
          </RBForm>
        </Col>
      </Row>
    </Container>
  );
}

export default Form;
