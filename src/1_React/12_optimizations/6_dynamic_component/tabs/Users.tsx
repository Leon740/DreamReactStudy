/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import useFetch from '../../../3_hooks/12_custom_hooks/1_useFetch/ts/useFetch';

interface UserI {
  id: number;
  name: string;
  email: string;
}

// eslint-disable-next-line import/prefer-default-export
export function Users() {
  const { data: users, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (isLoading) {
    return <p className="p-5 bg-green-600 border-2 border-green-600">Loading</p>;
  }

  if (error) {
    return <p className="p-5 bg-red-600 border-2 border-red-600">Error</p>;
  }

  return (
    users &&
    !isLoading && (
      <ul>
        {users.map(({ id, name, email }: UserI) => (
          <li key={id}>
            <h3 className="text-lg">{name}</h3>
            <p>{email}</p>
          </li>
        ))}
      </ul>
    )
  );
}
