import React from "react";
import CarName from "./CarName";

const Car = () => {
  return (
    <div>
      My Car is <CarName name={<h1>Toyota Supra</h1>} />
    </div>
  );
};

export default Car;
