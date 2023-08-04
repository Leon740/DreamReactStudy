import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import useFetch from './useFetch';

function Component2() {
  const {
    data, isLoading, error, refetchFn,
  } = useFetch();

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        { error }
      </div>
    );
  }

  if (data && !isLoading) {
    return (
      <div>
        <button
          type="button"
          onClick={() => refetchFn(
            {
              _limit: 3,
            },
          )}
        >
          Call Again
        </button>
        <ul>
          {data.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    );
  }

  return false;
}
export default Component2;
