import { useState, useEffect } from 'react';

type isLoadingT = boolean;
type errorMsgT = string | number;
// eslint-disable-next-line no-unused-vars
type refetchFnT = (params: object) => void;

export function useFetch<dataT>(url: string): {
  data: dataT | null;
  isLoading: isLoadingT;
  errorMsg: errorMsgT;
  refetch: refetchFnT;
} {
  const [dataSt, setDataSt] = useState<dataT | null>(null);
  const [isLoadingSt, setIsLoadingSt] = useState<isLoadingT>(false);
  const [errorMsgSt, setErrorMsgSt] = useState<errorMsgT>('');

  const fetchFn = (fetchUrl: string) => {
    // console.log('fetchFn');

    setIsLoadingSt(true);

    // setTimeout is used to show the loading progress
    setTimeout(() => {
      fetch(fetchUrl)
        .then((response) => {
          // console.log(response);
          if (!response.ok) {
            setErrorMsgSt(response.status);
            setIsLoadingSt(false);
            return false;
          }

          setErrorMsgSt('');
          return response.json();
        })
        .then((data) => {
          setDataSt(data);
          setIsLoadingSt(false);
        });
    }, 1000);
  };

  useEffect(() => {
    // console.log('useEffect');
    fetchFn(url);
  }, [url]);

  const refetchFn: refetchFnT = (params) => {
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    fetchFn(`${url}?${query}`);
  };

  return {
    data: dataSt,
    isLoading: isLoadingSt,
    errorMsg: errorMsgSt,
    refetch: refetchFn
  };
}
