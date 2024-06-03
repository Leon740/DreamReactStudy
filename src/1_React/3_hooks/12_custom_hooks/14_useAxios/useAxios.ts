import axios from 'axios';
import { useEffect, useState } from 'react';

type dataT = any;
type isLoadingT = boolean;
type errorMsgT = string | number;
// eslint-disable-next-line no-unused-vars
type refetchFnT = (params: object) => void;

interface useAxiosReturnI {
  data: dataT;
  isLoading: isLoadingT;
  errorMsg: errorMsgT;
  refetchFn: refetchFnT;
}

export default function useAxios(url: string): useAxiosReturnI {
  const [dataSt, setDataSt] = useState<dataT>([]);
  const [isLoadingSt, setIsLoadingSt] = useState<isLoadingT>(false);
  const [errorMsgSt, setErrorMsgSt] = useState<errorMsgT>('');

  const getDataFn = (dataUrl: string) => {
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

  const refetchFn = (params: object) => {
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
