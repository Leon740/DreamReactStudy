import React, { useContext, useEffect } from "react";
import CarContext from "./CarContext";

const CarDream = () => {
  const { car } = useContext(CarContext);

  useEffect(() => {
    console.log("render");
  });

  return (
    <div>
      My <u>Dream</u> Car is <b>{car}</b>
    </div>
  );
};

export default CarDream;
