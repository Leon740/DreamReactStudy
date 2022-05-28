import React, { useEffect, useState } from "react";

const Component = () => {
  const [isError, setIsError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(result => result.json())
      .then(
        result => {
          setIsLoaded(true);
          setPhotos(result);
        },
        error => {
          setIsLoaded(false);
          setIsError(error);
        }
      );
  }, []);

  if (isError) {
    return (
      <div className="alert alert-danger" role="alert">
        Error: {isError}
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
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
          {photos.map(user => (
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
};

export default Component;
