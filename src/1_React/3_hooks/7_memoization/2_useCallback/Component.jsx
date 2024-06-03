import React, { useState, useMemo, memo, useEffect, Profiler, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container, Row, Col } from 'react-bootstrap';

// === Concept
// === Problem
// 1 parent, 2 children
// on each state update children re-render
// === Solution
// useCallback = returns (callback) which is updated when (dependency array) is changed

const ThemeToggler = memo(({ theme, onToggleFn }) => {
  function onRenderFn(id, phase) {
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

const CARS_ARR = ['BMW', 'Audi', 'Evo'];

const CarSelect = memo(({ onSelectFn }) => {
  function onRenderFn(id, phase) {
    console.warn(`${id} ${phase}`);
  }

  return (
    <Profiler id="CarSelect" onRender={(id, phase) => onRenderFn(id, phase)}>
      <select onChange={(event) => onSelectFn(event.target.value)}>
        {CARS_ARR.map((car, index) => (
          <option key={index} value={car}>
            {car}
          </option>
        ))}
      </select>
    </Profiler>
  );
});

const CarDisplay = memo(({ selectedCar }) => {
  function onRenderFn(id, phase) {
    console.warn(`${id} ${phase}`);
  }

  return (
    <Profiler id="CarDisplay" onRender={(id, phase) => onRenderFn(id, phase)}>
      <section>
        <h3>{selectedCar}</h3>
      </section>
    </Profiler>
  );
});

function Problem() {
  const [carSt, setCarSt] = useState(CARS_ARR[0]);
  function carOnChangeFn(car) {
    console.log('carOnChangeFn');
    setCarSt(car);
  }

  const [darkThemeSt, setDarkThemeSt] = useState(false);
  // const themeOnChangeFn = useCallback(() => {
  //   setDarkThemeSt((prevTheme) => !prevTheme);
  // }, [darkThemeSt]);
  // The 'themeOnChangeFn' function makes the dependencies of useEffect Hook (at line 118) change on every render. To fix this, wrap the definition of 'themeOnChangeFn' in its own useCallback() Hook.
  function themeOnChangeFn() {
    console.log('themeOnChangeFn');
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
    console.error('carOnChangeFn');
  }, [carOnChangeFn]);
  useEffect(() => {
    console.error('themeOnChangeFn');
  }, [themeOnChangeFn]);

  return (
    <section style={themeObj}>
      <h2>Problem</h2>
      <CarSelect onSelectFn={carOnChangeFn} />
      <CarDisplay selectedCar={carSt} />
      <ThemeToggler theme={darkThemeSt} onToggleFn={themeOnChangeFn} />
    </section>
  );
}

function Solution() {
  const [carSt, setCarSt] = useState(CARS_ARR[0]);
  const carOnChangeFn = useCallback(
    (car) => {
      console.log('carOnChangeFn');
      setCarSt(car);
    },
    [setCarSt]
  );
  // in (dependency array) instead of variable (stCar), use function (setStCar), in this case (CarSelect) will never re-render
  // Note
  // React guarantees that setState function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.

  const [darkThemeSt, setDarkThemeSt] = useState(false);
  const themeOnChangeFn = useCallback(() => {
    console.log('themeOnChangeFn');
    setDarkThemeSt((prevTheme) => !prevTheme);
  }, [setDarkThemeSt]);

  const themeObj = useMemo(
    () => ({
      color: darkThemeSt ? '#fff' : '#000',
      backgroundColor: darkThemeSt ? '#000' : '#fff'
    }),
    [darkThemeSt]
  );

  useEffect(() => {
    console.error('carOnChangeFn');
  }, [carOnChangeFn]);
  useEffect(() => {
    console.error('themeOnChangeFn');
  }, [themeOnChangeFn]);

  return (
    <section style={themeObj}>
      <h2>Solution</h2>
      <CarSelect onSelectFn={carOnChangeFn} />
      <CarDisplay selectedCar={carSt} />
      <ThemeToggler theme={darkThemeSt} onToggleFn={themeOnChangeFn} />
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
