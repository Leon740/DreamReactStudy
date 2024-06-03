import React from 'react';
import useFetch from '../../../3_hooks/12_custom_hooks/11_useFetch/useFetch';
import Loader from '../Loader';

function Posts() {
  const {
    data: posts,
    isLoading,
    errorMsg
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <section>
      <h2 className="text-2xl my-8">Posts</h2>

      {isLoading && <Loader />}

      {errorMsg && (
        <h3 className="alert alert-danger" role="alert">
          {errorMsg}
        </h3>
      )}

      {posts && !isLoading && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
export default Posts;
