import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState({ qty: 10, isActive: false });

  useEffect(() => {
    let intervalId;
    if (time.isActive) {
      intervalId = setInterval(() => {
        setTime((prev) => ({ ...prev, qty: prev.qty - 1 }));
      }, 1000);

      if (time.qty < 1) {
        clearInterval(intervalId);
      }
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return (
    <div>
      <div>{time.qty}</div>
      <button
        type="button"
        onClick={() => {
          setTime((prev) => ({ ...prev, isActive: !prev.isActive }));
        }}
      >
        {time.isActive ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default Timer;
