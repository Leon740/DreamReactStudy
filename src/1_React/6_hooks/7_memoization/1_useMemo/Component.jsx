import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Problem from './Problem';
import Solution from './Solution';

// === Concept
// === Problem
// 1) each time we change (stCounter) we call a render
// 2) each render calls the whole logic of the Component, including (fnComplexCalc)
// === Solution
// useMemo(() => {}, [])
// (useMemo) returns the (result of the callback)=(value) which will be called when the dependencies array is changed
// (useMemo) caches the callback passed to it
// In this case when we change (stDarkTheme), (fnComplexCalc) is not being called

function Component() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Problem />
        </Col>
        <Col sm={6}>
          <Solution />
        </Col>
      </Row>
    </Container>
  );
}
export default Component;
