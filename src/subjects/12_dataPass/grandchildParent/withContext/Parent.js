import React, { useState } from "react";
import ComponentsContext from "./ComponentsContext";
import Child from "./Child";

const Parent = () => {
  const [carName, setCarName] = useState("Evo 9");

  return (
    <ComponentsContext.Provider
      value={{ carName: carName, setCarName: setCarName }}
    >
      <code>Parent :</code>
      <p>
        My <u>Favorite</u> is <b>{carName}</b>
      </p>

      <Child />
    </ComponentsContext.Provider>
  );
};

export default Parent;
