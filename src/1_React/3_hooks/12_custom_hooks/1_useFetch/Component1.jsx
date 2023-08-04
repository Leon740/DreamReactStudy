import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import useFetch from './useFetch';

function Component1() {
  const { data, isLoading, error, refetchFn } = useFetch();

  return (
    <>
      <button
        type="button"
        onClick={() =>
          refetchFn({
            _limit: 3
          })
        }
      >
        Call Again
      </button>

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {data && !isLoading && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Component1;
