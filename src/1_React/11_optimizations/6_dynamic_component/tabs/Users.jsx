import React from 'react';
import useFetch from '../../../3_hooks/12_custom_hooks/11_useFetch/useFetch';
import Loader from '../Loader';

function Users() {
  const {
    data: users,
    isLoading,
    errorMsg
  } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <section>
      <h2 className="text-2xl my-8">Users</h2>

      {isLoading && <Loader />}

      {errorMsg && (
        <h3 className="alert alert-danger" role="alert">
          {errorMsg}
        </h3>
      )}

      {users && !isLoading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
export default Users;
