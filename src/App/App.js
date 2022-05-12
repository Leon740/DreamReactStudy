import React from "react";
import "./App.scss";
// import Car from "../subjects/Context/FromParentToChild/Car";
import Car from "../subjects/Context/FromChildToParent/Car";

function App() {
  return (
    <div className="App">
      <h1>Going good</h1>
      <Car />
    </div>
  );
}

export default App;
