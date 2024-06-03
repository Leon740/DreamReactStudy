import { useState } from 'react';

interface ParamsI {
  [key: string]: string;
}

export function useSearchParams(initialParams: ParamsI, isSearchParams: boolean) {
  // console.log('useSearchParams');
  const url = new URL(window.location.href);

  const [params, setParams] = useState<ParamsI>(() => {
    const newParams: ParamsI = {};
    Object.entries(initialParams).forEach(([key, value]) => {
      const paramValue = url.searchParams.get(key) || value;
      newParams[key as keyof ParamsI] = paramValue;
    });
    return newParams;
  });

  if (isSearchParams) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

    window.history.pushState({}, '', url.toString());
  }

  return [params, setParams] as const;
}
