import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [carName, setCarName] = useState("Evo 9");

  return (
    <div>
      <code>Parent :</code>
      <p>
        My <u>Favorite</u> is <b>{carName}</b>
      </p>

      <Child carName={carName} setCarName={setCarName} />
    </div>
  );
};

export default Parent;
