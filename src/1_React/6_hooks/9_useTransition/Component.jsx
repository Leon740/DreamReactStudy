import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Problem from './Problem';
import Solution from './Solution';

function Component() {
  return (
    <Row>
      <Col xs={6}>
        <Problem />
      </Col>
      <Col xs={6}>
        <Solution />
      </Col>
    </Row>
  );
}

export default Component;
