import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import useFetch from './useFetch';

function Component() {
  const { data, isLoading, errorMsg, refetchFn } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (errorMsg) {
    return <Alert variant="danger">{errorMsg}</Alert>;
  }

  if (data && !isLoading) {
    return (
      <>
        <button type="button" className="my-8" onClick={() => refetchFn({ _limit: 3 })}>
          Call
        </button>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </>
    );
  }

  return null;
}
export default Component;
