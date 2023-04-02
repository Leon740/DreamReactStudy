import { useEffect, useState } from 'react';

export default function useFetch(url = 'https://jsonplaceholder.typicode.com/posts') {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchFn = (fetchUrl) => {
    console.log('fetchFn');

    setIsLoading(true);

    setTimeout(() => {
      fetch(fetchUrl)
        .then(response => {
          if (!response.ok) {
            setError(response.status);
            setIsLoading(false);
            return false;
          }

          setError(false);
          return response.json();
        })
        .then(fetchedData => {
          setData(fetchedData);
          setIsLoading(false);
        });
    }, 1000);
  };

  const refetchFn = (params) => {
    const queryStr = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    fetchFn(`${url}?${queryStr}`);
  };

  useEffect(() => {
    console.log('useEffect');
    fetchFn(url);
  }, [url]);

  return {
    data,
    isLoading,
    error,
    refetchFn,
  };
}
