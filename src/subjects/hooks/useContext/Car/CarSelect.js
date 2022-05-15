import React, { useContext } from "react";
import CarContext from "./CarContext";

const CarDream = () => {
  const { carChange } = useContext(CarContext);

  return (
    <div className="mb-3">
      <input onChange={event => carChange(event.target.value)} />
    </div>
  );
};

export default CarDream;
