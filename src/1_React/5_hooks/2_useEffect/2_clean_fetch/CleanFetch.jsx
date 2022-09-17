import React, { useState, useEffect } from 'react';

function CleanFetch() {
  const [type, setType] = useState('users');
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      // cleaner method (unsubscription) which is called when Component is unmounted
      console.log('clean type');
    };
  }, [type]);

  return (
    <div>
      <h1>
        Resource:
        {type}
      </h1>

      <button
        type="button"
        onClick={() => {
          setType('users');
        }}
      >
        users
      </button>

      <button
        type="button"
        onClick={() => {
          setType('posts');
        }}
      >
        posts
      </button>
      <button
        type="button"
        onClick={() => {
          setType('todos');
        }}
      >
        todos
      </button>

      <div>
        <code>{JSON.stringify(data)}</code>
      </div>
    </div>
  );
}

export default CleanFetch;
