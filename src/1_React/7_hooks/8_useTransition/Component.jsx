import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Problem from './Problem';
import Solution from './Solution';

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

function Component() {
  const [inputValueStrSt, setInputStrSt] = useState('');
  const [listArrSt, setListArrSt] = useState([]);

  function inputOnChangeFn(keywordStr) {
    setInputStrSt(keywordStr);

    const listArr = [];
    for (let i = 0; i < 20000; i++) {
      listArr.push(keywordStr);
    }

    setListArrSt(listArr);
  }

  return (
    <Row>
      <Col xs={6}>
        <Problem inputValueStr={inputValueStrSt} inputOnChangeFn={inputOnChangeFn} list={listArrSt} />
      </Col>
      <Col xs={6}>
        <Solution inputValueStr={inputValueStrSt} inputOnChangeFn={inputOnChangeFn} list={listArrSt} />
      </Col>
    </Row>
  );
}

export default Component;
