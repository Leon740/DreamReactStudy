import { useState } from 'react';

export function useSearchParams(initialParams, isSearchParams) {
  // console.log('useSearchParams');
  const url = new URL(window.location.href);

  const [paramsSt, setParamsSt] = useState(() => {
    const newParams = {};
    Object.entries(initialParams).forEach(([key, value]) => {
      const paramValue = url.searchParams.get(key) || value;
      newParams[key] = paramValue;
    });
    return newParams;
  });

  if (isSearchParams) {
    Object.entries(paramsSt).forEach(([key, value]) => url.searchParams.set(key, value));

    window.history.pushState({}, '', url.toString());
  }

  return [paramsSt, setParamsSt];
}
