import React, { StrictMode } from 'react';

function Component() {
  // === Concept
  // StrictMode is a tool for discovering potential problems in the app.
  // StrictMode activates additional check for it's children.

  return (
    <div className="app">
      {/* <Header /> */}
      <StrictMode>
        {/* <Body /> */}
      </StrictMode>
      {/* <Footer /> */}
    </div>
  );
}

export default Component;
