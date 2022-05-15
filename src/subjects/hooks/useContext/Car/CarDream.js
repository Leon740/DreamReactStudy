import React, { useContext } from "react";
import CarContext from "./CarContext";

const CarDream = () => {
  const { car } = useContext(CarContext);

  return (
    <div>
      My <u>Dream</u> Car is <b>{car}</b>
    </div>
  );
};

export default CarDream;
