import React, { ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Spinner from 'react-bootstrap/Spinner';
import useFetch from './useFetch';

interface IPost {
  id: number;
  title: string;
}

function Component(): ReactElement {
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
          {data.map((post: IPost) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Component;
