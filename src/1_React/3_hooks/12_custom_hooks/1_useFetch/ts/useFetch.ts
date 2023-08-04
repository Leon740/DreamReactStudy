import { useEffect, useState } from 'react';

type TData = any;
type TIsLoading = boolean;
type TError = boolean | string | number;
// eslint-disable-next-line no-unused-vars
type TRefetchFn = (params: object) => void;

interface IUseFetchReturnType {
  data: TData;
  isLoading: TIsLoading;
  error: TError;
  refetchFn: TRefetchFn;
}

export default function useFetch(
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  url: string = 'https://jsonplaceholder.typicode.com/posts'
): IUseFetchReturnType {
  const [data, setData] = useState<TData>();
  const [isLoading, setIsLoading] = useState<TIsLoading>(true);
  const [error, setError] = useState<TError>(false);

  const fetchFn = (fetchUrl: string): void => {
    console.log('fetchFn');

    setIsLoading(true);

    setTimeout(() => {
      fetch(fetchUrl)
        .then((response) => {
          if (!response.ok) {
            setError(response.status);
            setIsLoading(false);
            return false;
          }

          setError(false);
          return response.json();
        })
        .then((fetchedData) => {
          setData(fetchedData);
          setIsLoading(false);
        });
    }, 1000);
  };

  const refetchFn: TRefetchFn = (params) => {
    const queryStr: string = Object.entries(params)
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
    refetchFn
  };
}
