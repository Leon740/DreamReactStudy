import React from "react";
import CarName from "./CarName";
import CarDisplay from "./CarDisplay";

const Node = () => {
  const node = (
    <i>
      <CarName name={"Toyota Supra"} />
    </i>
  );

  return (
    <div>
      <CarDisplay node={node} />
    </div>
  );
};

export default Node;
