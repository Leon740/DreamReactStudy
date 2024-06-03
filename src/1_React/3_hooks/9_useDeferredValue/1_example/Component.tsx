import React, { useState, useEffect, useDeferredValue, memo, Profiler } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container, Row, Col } from 'react-bootstrap';

// === Concept
// === Problem
// Complex logic runs each time we update (input)
// Because of this (App) gets stuck after each (input) update
// === Solution
// useDeferredValue
// (useDeferredValue) waits around 100 milliseconds after (input) finished updating (typing stopped for more than 100 ms)
// (updating input) gets higher priority in updates, after finishing (updating input), (React) will work on executing complex logic

// First, optimize SlowList to skip re-rendering when its props are the same. To do this, wrap it in memo:
// memo in order to not render when (inputValueSt) is changed, only on inputValue={deferredInputValue} change

interface SlowListPropsI {
  inputValue: string;
}
const SlowList = memo(({ inputValue }: SlowListPropsI) => {
  function onRenderFn(id: string, phase: string): void {
    console.warn(`${id} ${phase}`);
  }

  useEffect(() => {
    console.log('render');
  });

  const list = [];

  for (let i = 0; i < 20000; i++) {
    list.push(inputValue);
  }

  return (
    <Profiler id="SlowList" onRender={(id, phase) => onRenderFn(id, phase)}>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Profiler>
  );
});

function Component(): JSX.Element {
  const [inputValueSt, setInputValueSt] = useState<string>('');

  const deferredInputValue = useDeferredValue<string>(inputValueSt);
  const isPending = inputValueSt !== deferredInputValue;

  function inputOnChangeFn(inputValue: string): void {
    setInputValueSt(inputValue);
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <input
            type="text"
            value={inputValueSt}
            onChange={(event) => inputOnChangeFn(event.target.value)}
          />
        </Col>
        <Col sm={6}>
          <SlowList inputValue={inputValueSt} />
        </Col>
        <Col sm={6}>
          {isPending ? <p>Loading ...</p> : <SlowList inputValue={deferredInputValue} />}
          {/* 2nd way of indicating the progress */}
          {/* <Suspense fallback={<p>Loading ...</p>}>
          <SlowList inputValue={deferredInputValue} />
        </Suspense> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Component;
