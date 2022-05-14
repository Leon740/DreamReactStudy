import React, { useState, useEffect } from "react";

const CleanAndFetch = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));

    return () => {
      // cleaner method (unsubscription) which is called when Component is unmounted
      console.log("clean type");
    };
  }, [type]);

  return (
    <div>
      <h1>Resource: {type}</h1>

      <button
        onClick={() => {
          setType("users");
        }}
      >
        users
      </button>

      <button
        onClick={() => {
          setType("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          setType("todos");
        }}
      >
        todos
      </button>

      <div>
        <code>{JSON.stringify(data)}</code>
      </div>
    </div>
  );
};

export default CleanAndFetch;
