import React, { useState } from 'react';

function Component() {
  const [stActive, setStActive] = useState(false);

  return (
    <div>
      <button type="button" className={`btn btn-primary ${stActive ? 'active' : ''}`} onClick={() => setStActive((prev) => !prev)}>Toggle</button>
    </div>
  );
}

export default Component;
