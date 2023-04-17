import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RBForm from 'react-bootstrap/Form';
import FormGroup from './FormGroup';
import Buttons from '../0_common/Buttons';
import { INPUTS, getFormInputsFn } from '../0_common/common';

function Form() {
  const [formDataSt, setFormDataSt] = useState(() => getFormInputsFn());

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
    setIsFormResetSt(true);
    setFormDataSt(getFormInputsFn());
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
            {INPUTS.map(({ id, name, label, type }) => (
              <FormGroup
                key={id}
                name={name}
                label={label}
                type={type}
                value={formDataSt[name]}
                onChangeFn={inputOnChangeFn}
                formReset={[isFormResetSt, setIsFormResetSt]}
              />
            ))}
            <Buttons />
          </RBForm>
        </Col>
      </Row>
    </Container>
  );
}

export default Form;
