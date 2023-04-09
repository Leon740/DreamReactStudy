import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Component1 from './Component1';
import Component2 from './Component2';

function Parent() {
  return (
    <Container>
      <Row>
        <Col sm={6}><Component1 /></Col>
        <Col sm={6}><Component2 /></Col>
      </Row>

    </Container>
  );
}
export default Parent;
