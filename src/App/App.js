import React from "react";
import "./App.scss";
import Car from "../subjects/Lazy/Car";
import ErrorBoundary from "../subjects/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <h1>Going good</h1>
      <ErrorBoundary>
        <Car />
      </ErrorBoundary>
    </div>
  );
}

export default App;
