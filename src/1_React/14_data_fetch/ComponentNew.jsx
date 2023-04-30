import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function ComponentNew() {
  const [stStatus, setStStatus] = useState({ status: 'pending', error: '' });
  const [stPhotos, setStPhotos] = useState([]);

  // === Concept
  // === Problem
  // Fetch considers only network errors as errors
  // === Solution
  // Conditions

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => {
        if (!response.ok) {
          setStStatus({ status: 'rejected', error: response.status });
        }
        return response.json();
      })
      .then((data) => {
        if (data.length) {
          setStPhotos(data);
          setStStatus({ status: 'fulfilled', error: '' });
        }
      });
  }, []);

  if (stStatus.status === 'rejected') {
    return (
      <div className="alert alert-danger" role="alert">
        {stStatus.error} Error
      </div>
    );
  }
  if (stStatus.status === 'pending') {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>albumId</th>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {stStatus.status === 'fulfilled' &&
            stPhotos.map((user) => (
              <tr key={user.id}>
                <td>{user.albumId}</td>
                <td>{user.title}</td>
                <td>{user.url}</td>
                <td>{user.thumbnailUrl}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComponentNew;
