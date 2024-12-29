import { useState } from 'react';

export function Component() {
  const getDefaultValue = () => {
    console.log('processing...');

    return 0;
  };

  // === Problem
  // getDefaultValue is called on every re-render
  // const [isLoadingSt, setIsLoadingSt] = useState(getDefaultValue());
  // === Solution
  // use callback to get the default value and do not call it on re-render
  const [isLoadingSt, setIsLoadingSt] = useState(() => getDefaultValue());

  const handleClick = () => {
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
