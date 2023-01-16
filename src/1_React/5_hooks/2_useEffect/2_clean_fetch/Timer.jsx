import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState({ qty: 5, isActive: false });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => ({ ...prev, qty: prev.qty - 1 }));
    }, 1000);

    if (time.qty < 1) {
      clearInterval(intervalId);
    }

    return () => { clearInterval(intervalId); };
  }, [time]);

  return (
    <div>
      <div>{time.qty}</div>
      <button type="button" onClick={() => { setTime((prev) => ({ ...prev, isActive: true })); }}>Click</button>
    </div>
  );
}

export default Timer;
