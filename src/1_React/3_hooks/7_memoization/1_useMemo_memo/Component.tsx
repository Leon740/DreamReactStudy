import React, { useState, useMemo, memo, useEffect, Profiler } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container, Row, Col } from 'react-bootstrap';

// === Concept
// === Problem
// We have 2 states: (counterSt), (themeDarkSt)
// (counterSt) changes and calls a render, render calls (complexCalcFn), (themeDarkSt)
// (themeDarkSt) changes and calls a render, render calls (complexCalcFn), (counterSt)
// === Solution
// Separate 2 states:
// call (complexCalcFn(counterSt)) only when (counterSt) is changed
// call (darkThemeSt) useEffect only when (darkThemeSt) is changed

interface ThemeTogglerPropsI {
  theme: boolean;
  onToggleFn: () => void;
}
const ThemeToggler = memo(({ theme, onToggleFn }: ThemeTogglerPropsI) => {
  // === Concept
  // === Problem
  // 1) if the (parent) component re-renders, all of the children components re-render
  // Even if (ThemeToggler) comp. props are the same as they were in the previous render
  // === Solution
  // 1) memo = (memoize) component
  // 2) memo is a function which returns a comp.
  // 3) The important & basic rule is that if the component props are the same as they were in the previous render, the comp. will no re-render
  // 4) Re-render will occur only if the component (state) or (context) are changed
  // 5) My component re-renders when a prop is an object, array, or function
  // React compares old and new props by shallow equality: that is, it considers whether each new prop is reference-equal to the old prop. If you create a new object or array each time the parent is re-rendered, even if the individual elements are each the same, React will still consider it to be changed. Similarly, if you create a new function when rendering the parent component, React will consider it to have changed even if the function has the same definition. To avoid this, simplify props or memoize props in the parent component.

  function onRenderFn(id: string, phase: string): void {
    console.warn(`${id} ${phase}`);
  }

  return (
    <Profiler id="ThemeToggler" onRender={(id, phase) => onRenderFn(id, phase)}>
      <section>
        <h3>Theme: {theme ? 'dark' : 'light'}</h3>
        <button type="button" className="btn btn-success" onClick={() => onToggleFn()}>
          toggle theme
        </button>
      </section>
    </Profiler>
  );
});

function complexCalcFn(num: number): number {
  const start = new Date().getTime();
  let end = start;

  while (end < start + 500) {
    end = new Date().getTime();
  }

  return num * 2;
}

function Problem(): JSX.Element {
  const [counterSt, setCounterSt] = useState<number>(0);
  function counterOnChangeFn(num: number): void {
    setCounterSt(num);
  }

  const complexCalcRes: number = complexCalcFn(counterSt);

  const [darkThemeSt, setDarkThemeSt] = useState<boolean>(false);
  function themeOnChangeFn(): void {
    setDarkThemeSt((prevTheme) => !prevTheme);
  }

  // The 'themeObj' object makes the dependencies of useEffect Hook (at line 44) change on every render.
  // To fix this, wrap the initialization of 'themeObj' in its own useMemo() Hook.eslintreact-hooks/exhaustive-deps
  const themeObj = {
    color: darkThemeSt ? '#fff' : '#000',
    backgroundColor: darkThemeSt ? '#000' : '#fff'
  };

  useEffect(() => {
    console.log('themeObj');
  }, [themeObj]);

  return (
    <section style={themeObj}>
      <h2>Problem</h2>
      <section>
        <h3>counterSt: {counterSt}</h3>
        <input
          type="number"
          value={counterSt}
          onChange={(event) => counterOnChangeFn(parseInt(event.target.value, 10))}
        />
      </section>
      <section>
        <h3>complexCalcRes: {complexCalcRes}</h3>
      </section>
      <ThemeToggler theme={darkThemeSt} onToggleFn={() => themeOnChangeFn()} />
    </section>
  );
}

function Solution(): JSX.Element {
  const [counterSt, setCounterSt] = useState<number>(0);
  function counterOnChangeFn(num: number): void {
    setCounterSt(num);
  }

  const complexCalcRes: number = useMemo(() => complexCalcFn(counterSt), [counterSt]);

  const [darkThemeSt, setDarkThemeSt] = useState<boolean>(false);
  function themeOnChangeFn(): void {
    setDarkThemeSt((prevTheme) => !prevTheme);
  }

  const themeObj = useMemo(
    () => ({
      color: darkThemeSt ? '#fff' : '#000',
      backgroundColor: darkThemeSt ? '#000' : '#fff'
    }),
    [darkThemeSt]
  );

  useEffect(() => {
    console.log('themeObj');
  }, [themeObj]);

  return (
    <section style={themeObj}>
      <h2>Solution</h2>
      <section>
        <h3>counterSt: {counterSt}</h3>
        <input
          type="number"
          value={counterSt}
          onChange={(event) => counterOnChangeFn(parseInt(event.target.value, 10))}
        />
      </section>

      <section>
        <h3>complexCalcRes: {complexCalcRes}</h3>
      </section>

      <ThemeToggler theme={darkThemeSt} onToggleFn={() => themeOnChangeFn()} />
    </section>
  );
}

function Component(): JSX.Element {
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
