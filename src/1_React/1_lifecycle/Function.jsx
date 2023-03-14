import React, { useEffect, useState } from 'react';

// 1) render
// 2) componentDidMount
// 3) componentWillUnmount

function Clock() {
  const [stTime, setStTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('componentDidMount');

    const intervalId = setInterval(() => {
      setStTime(new Date().toLocaleTimeString());
      console.log(stTime);
    }, 1000);

    return () => {
      console.log('componentWillUnmount');
      clearInterval(intervalId);
    };
  }, [stTime]);

  console.log('render');

  return (
    <div>{stTime}</div>
  );
}

function App() {
  const [stClock, setStClock] = useState(true);

  return (
    <>
      {stClock && <Clock />}
      <button type="button" onClick={() => setStClock((prev) => !prev)}>{stClock ? 'hide' : 'show'}</button>
    </>
  );
}

export default App;
