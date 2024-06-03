import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import useFetch from './useFetch';
import useDebouncedValue from '../7_useDebounce/1_useDebouncedValue/useDebouncedValue';

const TIMEOUT_NUM = 1000;

function Component() {
  const { data, isLoading, errorMsg, refetchFn } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const [limitSt, setLimitSt] = useState(3);

  const debouncedLimitSt = useDebouncedValue(limitSt, TIMEOUT_NUM);

  useEffect(() => {
    // call (refetchFn) after clicking stopped for (TIMEOUT_NUM)
    console.log(`debouncedLimitSt ${debouncedLimitSt}`);
    refetchFn({ _limit: debouncedLimitSt });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedLimitSt]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setLimitSt((prevLimitSt) => prevLimitSt + 1)}
      >
        increase limit
      </button>

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {errorMsg && (
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      )}

      {data && !isLoading && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Component;
