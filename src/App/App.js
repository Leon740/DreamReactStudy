import React from "react";
import "./App.scss";
import Counter2 from "../subjects/hooks/useReducer/Counter/Counter2";

function App() {
  return (
    <div className="App">
      <Counter2 initialCount={1} />
    </div>
  );
}

export default App;
