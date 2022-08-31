import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [carName, setCarName] = useState("Evo 9");

  return (
    <div>
      <p>
        My <u>Dream</u> is <b>{carName}</b>
      </p>
      <Child carName={carName} setCarName={setCarName} />
    </div>
  );
};

export default Parent;
