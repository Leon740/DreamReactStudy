import React from "react";
import "./App.scss";
import VideoContainerConsumer from "../subjects/containerComponents/forwardRefExample/VideoContainerConsumer";

function App() {
  return (
    <div className="App container">
      <VideoContainerConsumer />
    </div>
  );
}

export default App;
