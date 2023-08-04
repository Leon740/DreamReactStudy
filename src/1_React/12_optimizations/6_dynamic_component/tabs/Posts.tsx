/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import useFetch from '../../../3_hooks/12_custom_hooks/1_useFetch/ts/useFetch';

interface PostI {
  id: number;
  title: string;
  body: string;
}

// eslint-disable-next-line import/prefer-default-export
export function Posts() {
  const { data: posts, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (isLoading) {
    return <p className="p-5 bg-green-600 border-2 border-green-600">Loading</p>;
  }

  if (error) {
    return <p className="p-5 bg-red-600 border-2 border-red-600">Error</p>;
  }

  return (
    posts &&
    !isLoading && (
      <ul>
        {posts.map(({ id, title, body }: PostI) => (
          <li key={id}>
            <h3 className="text-lg">{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    )
  );
}
