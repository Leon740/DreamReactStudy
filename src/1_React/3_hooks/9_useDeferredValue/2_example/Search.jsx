import React, { useState, useDeferredValue, memo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Row, Col } from 'react-bootstrap';
import CARS_DATA from './cars_data.json';

function sanitizeStringFn(string) {
  return string.trim().toLowerCase();
}

// (memo) in order to not to rerender the (CarSearchResults) on (inputValueSt) change
const CarSearchResults = memo(({ data, name }) => {
  const results = data.filter((car) => sanitizeStringFn(car.name).includes(sanitizeStringFn(name)));

  return (
    <ul>
      {results.map((car, index) => (
        <li
          key={index}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: sanitizeStringFn(car.name).replace(
              sanitizeStringFn(name),
              `<span style='background-color: yellow;'>${sanitizeStringFn(name)}</span>`
            )
          }}
        />
      ))}
    </ul>
  );
});

function CarSearch() {
  const [inputValueSt, setInputValueSt] = useState('');

  const inputOnChangeFn = (value) => {
    setInputValueSt(value);
  };

  const deferredInputValue = useDeferredValue(inputValueSt);
  const isPending = deferredInputValue !== inputValueSt;

  return (
    <Row>
      <Col xs={12}>
        <input
          type="text"
          value={inputValueSt}
          onChange={(event) => inputOnChangeFn(event.target.value)}
        />
      </Col>
      <Col sm={6}>
        <h2>Problem</h2>
        <CarSearchResults data={CARS_DATA} name={inputValueSt} />
      </Col>
      <Col sm={6}>
        <h2>Solution</h2>
        {isPending ? (
          <p>Loading ...</p>
        ) : (
          <CarSearchResults data={CARS_DATA} name={deferredInputValue} />
        )}
        {/* 2nd way of indicating the progress */}
        {/* <Suspense fallback={<p>Loading ...</p>}>
          <CarSearchResults data={CARS_DATA} name={deferredInputValue} />
        </Suspense> */}
      </Col>
    </Row>
  );
}

export default CarSearch;
