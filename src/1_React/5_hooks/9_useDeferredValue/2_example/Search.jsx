import React, { useState, useDeferredValue } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchResults from './SearchResults';

// === Concept
// === Problem
// Complex logic runs each time we update (input)
// Because of this (App) gets stuck after each (input) update
// === Solution
// useDeferredValue
// (useDeferredValue) waits around 100 milliseconds after (input) finished updating (typing stopped for more than 100 ms)
// (updating input) gets higher priority in updates, after finishing (updating input), (React) will work on executing complex logic

function Parent() {
  const [stCarName, setStCarName] = useState('');

  const deferredCarName = useDeferredValue(stCarName);

  // loading
  const isPending = stCarName !== deferredCarName;

  return (
    <Container className="pt-5">
      <input value={stCarName} onChange={(event) => setStCarName(event.target.value)} />
      <Row>
        <Col xs={6}><SearchResults carName={stCarName} /></Col>
        <Col xs={6}>{isPending ? <div>Loading...</div> : <SearchResults carName={deferredCarName} />}</Col>
      </Row>
    </Container>
  );
}
export default Parent;
