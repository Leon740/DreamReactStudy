/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line max-classes-per-file
import React, { useState, useEffect } from 'react';

// === Info
// 1) mount
// 2) update
// 3) unmount
// let name = 'Leonid';

function Clock() {
  const [timeSt, setTimeSt] = useState(new Date().toLocaleTimeString());

  let name = 'Leonid';
  console.log('name', name);

  useEffect(() => {
    console.log('componentDidMount');

    const intervalId = setInterval(() => {
      setTimeSt(new Date().toLocaleTimeString());
      console.log('name 0', name);
      name = Date.now();
      console.log('name 1', name);
    }, 1000);

    return () => {
      console.log('componentWillUnmount');
      clearInterval(intervalId);
    };
  }, [timeSt]);

  console.log('render');

  return <>Now: {timeSt}</>;
}

function Component() {
  const [clockSt, setClockSt] = useState(true);

  return (
    <>
      {clockSt && <Clock />}
      <button type="button" onClick={() => setClockSt((prevSt) => !prevSt)}>
        {clockSt ? 'Hide' : 'Show'}
      </button>
    </>
  );
}

export default Component;
