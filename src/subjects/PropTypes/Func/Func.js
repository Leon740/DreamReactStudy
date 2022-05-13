import React, { useState } from "react";
import CarSelect from "./CarSelect";
import CarDisplay from "./CarDisplay";

const Func = () => {
  const [carState, setCarState] = useState("Toyota Supra");

  return (
    <div className="Car">
      <CarDisplay car={carState} />
      <CarSelect selectCarFunc={setCarState} />
    </div>
  );
};

export default Func;
