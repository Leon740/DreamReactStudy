import React, { useState } from "react";
import CarContext from "./CarContext";
import CarSelect from "./CarSelect";
import CarDream from "./CarDream";
import CarFavorite from "./CarFavorite";
import CarBeloved from "./CarBeloved";

const Car = () => {
  const [car, setCar] = useState("Evo");

  return (
    <div className="container pt-5">
      <CarContext.Provider
        value={{
          car: car,
          carChange: setCar,
        }}
      >
        <CarSelect />
        <CarDream />
        <CarFavorite />
        <CarBeloved />
      </CarContext.Provider>
    </div>
  );
};

export default Car;
