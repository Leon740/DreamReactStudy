import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxios(url) {
  const [dataSt, setDataSt] = useState([]);
  const [isLoadingSt, setIsLoadingSt] = useState(false);
  const [errorMsgSt, setErrorMsgSt] = useState('');

  const getDataFn = (dataUrl) => {
    console.log('getDataFn');

    setIsLoadingSt(true);

    setTimeout(() => {
      axios
        .get(dataUrl)
        .then((response) => {
          setDataSt(response.data);
          setIsLoadingSt(false);
        })
        .catch((error) => {
          setErrorMsgSt(error.message);
          setIsLoadingSt(false);
        });
    }, 1000);
  };

  useEffect(() => {
    console.log('useEffect');
    getDataFn(url);
  }, [url]);

  const refetchFn = (params) => {
    const query = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    getDataFn(`${url}?${query}`);
  };

  return {
    data: dataSt,
    isLoading: isLoadingSt,
    errorMsg: errorMsgSt,
    refetchFn
  };
}
