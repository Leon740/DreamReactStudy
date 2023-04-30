import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Problem from './Problem';
import Solution from './Solution';

// === Concept
// === Problem
// 1) each time we change (stCounter) we call a render
// 2) each render calls the whole logic of the Component, including re-rendering (ThemeToggler) component
// === Solution
// useCallback(() => {}, [])
// (useCallback) returns the (callback) which will be updated when the dependencies array is changed
// In this case when we change (stDarkTheme), re-rendering of (ThemeToggler) component will not occur

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
