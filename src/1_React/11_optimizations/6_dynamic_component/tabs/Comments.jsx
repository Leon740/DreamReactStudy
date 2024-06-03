import React from 'react';
import useFetch from '../../../3_hooks/12_custom_hooks/11_useFetch/useFetch';
import Loader from '../Loader';

function Comments() {
  const {
    data: comments,
    isLoading,
    errorMsg
  } = useFetch('https://jsonplaceholder.typicode.com/comments');

  return (
    <section>
      <h2 className="text-2xl my-8">Comments</h2>

      {isLoading && <Loader />}

      {errorMsg && (
        <h3 className="alert alert-danger" role="alert">
          {errorMsg}
        </h3>
      )}

      {comments && !isLoading && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
export default Comments;
