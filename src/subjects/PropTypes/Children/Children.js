import React from "react";
import CarName from "./CarName";
import CarDisplay from "./CarDisplay";

const Children = () => {
  return (
    <div>
      <CarDisplay>
        <CarName name={"Toyota Supra"} />
      </CarDisplay>
    </div>
  );
};

export default Children;
