import React, { useState, useTransition } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Row, Col, Container } from 'react-bootstrap';

// === Concept
// === Problem
// React gathers state updates to optimize rendering
// (setInputValueSt) and (setListSt) calls are combined together
// === Solution
// Give the priority to the state update
// const [isPending, startTransition] = useTransition()
// isPending = boolean, indicates the progress of the transition
// startTransition = function to make a transition, downgrades the priority
// (setListSt) gets lower priority

// === Concept
// === Problem
// (React) gathers all of the state updates to one state and call (render) once with all of the state updates
// (React) waits until all of the code including complex logic is executed
// Because of this (App) gets stuck after each input update
// === Solution
// [isPending, startTransition] = useTransition();
// Put complex code in (startTransition)
// (isPending) is (true) while (startTransition) works
// (isPending) is (false) when (startTransition) finishes working
// In this case we have one (render) on (listArrSt) update, and one (render) on (stList) update
// Because of separating renders (App) doesn't get stuck
// (listArrSt) gets higher priority in updates, after (listArrSt) finishes updates, (React) will work on updating (listArrSt)

function Problem() {
  const [inputValueSt, setInputValueSt] = useState('');
  const [listSt, setListSt] = useState([]);

  function inputOnChangeFn(inputValue) {
    setInputValueSt(inputValue);

    const list = [];

    for (let i = 0; i < 20000; i++) {
      list.push(inputValue);
    }

    setListSt(list);
  }

  return (
    <section>
      <h2>Problem</h2>
      <input
        type="text"
        value={inputValueSt}
        onChange={(event) => inputOnChangeFn(event.target.value)}
      />
      <ul>
        {listSt.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Solution() {
  const [inputValueSt, setInputValueSt] = useState('');
  const [listSt, setListSt] = useState([]);

  const [isPending, startTransition] = useTransition();

  function inputOnChangeFn(inputValue) {
    setInputValueSt(inputValue);

    startTransition(() => {
      const list = [];

      for (let i = 0; i < 20000; i++) {
        list.push(inputValue);
      }

      setListSt(list);
    });
  }

  return (
    <section>
      <h2>Solution</h2>
      <input
        type="text"
        value={inputValueSt}
        onChange={(event) => inputOnChangeFn(event.target.value)}
      />
      {isPending ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {listSt.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

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
