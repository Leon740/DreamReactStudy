import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import useFetch from './useFetch';

function Component() {
  const { data, isLoading, errorMsg, refetchFn } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div>
      <button type="button" className="my-8" onClick={() => refetchFn({ _limit: 3 })}>
        Call
      </button>

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

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
