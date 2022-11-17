import React, { useState, useEffect } from 'react';

function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ key: 'data is fetched' });
    }, 1000);
  }, []);

  return (
    <div>{data && <span>{data.key}</span>}</div>
  );
}

export default Component;
