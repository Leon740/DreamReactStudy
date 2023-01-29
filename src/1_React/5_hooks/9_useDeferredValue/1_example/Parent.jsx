import React, { useState, useDeferredValue } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Child from './Child';

// === Concept
// === Problem
// Complex logic runs each time we update (input)
// Because of this (App) gets stuck after each (input) update
// === Solution
// useDeferredValue
// (useDeferredValue) waits around 100 milliseconds after (input) finished updating (typing stopped for more than 100 ms)
// (updating input) gets higher priority in updates, after finishing (updating input), (React) will work on executing complex logic

function Component() {
  const [stInput, setStInput] = useState('');

  const deferredInput = useDeferredValue(stInput);

  const isPending = stInput !== deferredInput;

  return (
    <Container>
      <input value={stInput} onChange={(event) => setStInput(event.target.value)} />
      <Row>
        <Col xs={6}>
          <Child input={stInput} />
        </Col>
        <Col xs={6}>
          {isPending ? <div>Loading...</div> : <Child input={deferredInput} />}
        </Col>
      </Row>
    </Container>
  );
}

export default Component;
