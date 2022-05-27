import React, { StrictMode } from "react";
import "./App.scss";
import Car from "subjects/10_strictMode/Car";

function App() {
  return (
    <div className="App container">
      <StrictMode>
        <Car />
      </StrictMode>
    </div>
  );
}

export default App;
