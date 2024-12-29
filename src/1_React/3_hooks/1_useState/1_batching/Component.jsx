import { useState } from 'react';

export function Component() {
  const [isLoadingSt, setIsLoadingSt] = useState(0);

  const handleClick = () => {
    // === Problem: only +1
    // batching: gathering all setState calls to one bucket (call), in this case isLoadingSt is not updated yet when we call the 2nd setState
    // setIsLoadingSt(isLoadingSt + 1);
    // setIsLoadingSt(isLoadingSt + 1);
    // === Solution: prev +2
    // explicitly define the current state depends on the previous state
    setIsLoadingSt((prev) => prev + 1);
    setIsLoadingSt((prev) => prev + 1);
  };

  return (
    <div className="component">
      <p>isLoadingSt: {isLoadingSt}</p>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </div>
  );
}
