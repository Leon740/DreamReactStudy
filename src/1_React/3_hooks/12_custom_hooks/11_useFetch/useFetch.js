import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [dataSt, setDataSt] = useState([]);
  const [isLoadingSt, setIsLoadingSt] = useState(false);
  const [errorMsgSt, setErrorMsgSt] = useState('');

  const fetchFn = (fetchUrl) => {
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

  const refetchFn = (params) => {
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    fetchFn(`${url}?${query}`);
  };

  return {
    data: dataSt,
    isLoading: isLoadingSt,
    errorMsg: errorMsgSt,
    refetchFn
  };
}
