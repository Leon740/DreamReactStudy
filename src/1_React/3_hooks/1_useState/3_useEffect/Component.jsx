import { Profiler, useEffect, useState } from 'react';

export function Component() {
  // === Problem
  // 2 renders
  // 1st: setIsLoadingSt
  // 2nd: setIsErrorSt in useEffect
  const [isLoadingSt, setIsLoadingSt] = useState(0);
  const [isErrorSt, setIsErrorSt] = useState(0);

  const handleClick = () => {
    setIsLoadingSt((prev) => prev + 1);
  };

  useEffect(() => {
    if (isLoadingSt !== 0) {
      setIsErrorSt((prev) => prev + 1);
    }
  }, [isLoadingSt]);

  const componentOnRender = () => {
    console.log('isLoadingSt', isLoadingSt);
    console.log('isErrorSt', isErrorSt);
  };

  return (
    <Profiler id="Component" onRender={componentOnRender}>
      <div className="component">
        <p>isLoadingSt: {isLoadingSt}</p>
        <p>isErrorSt: {isErrorSt}</p>
        <button type="button" onClick={handleClick}>
          click
        </button>
      </div>
    </Profiler>
  );
}
