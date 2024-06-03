import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import useAxios from './useAxios';

function Posts() {
  const {
    data: posts,
    isLoading,
    errorMsg,
    refetchFn
  } = useAxios('https://jsonplaceholder.typicode.com/posts');

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

      {posts && !isLoading && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Posts;
