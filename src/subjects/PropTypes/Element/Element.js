import React from "react";
import CarName from "./CarName";
import CarDisplay from "./CarDisplay";

const Element = () => {
  const element = (
    <h1>
      <CarName name={"Toyota Supra"} />
    </h1>
  );

  return (
    <div>
      <CarDisplay element={element} />
    </div>
  );
};

export default Element;
