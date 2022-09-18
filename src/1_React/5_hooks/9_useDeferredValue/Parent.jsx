import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ChildProblem from './ChildProblem';
import ChildSolution from './ChildSolution';

function Component() {
  const [stInput, setStInput] = useState('');

  return (
    <div>
      <input value={stInput} onChange={(event) => setStInput(event.target.value)} />
      <Row>
        <Col xs={6}>
          <ChildProblem input={stInput} />
        </Col>
        <Col xs={6}>
          <ChildSolution input={stInput} />
        </Col>
      </Row>
    </div>
  );
}

export default Component;
