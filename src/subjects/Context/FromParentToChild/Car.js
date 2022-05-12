import React, { useState } from "react";
import SelectCar from "./SelectCar";

import DreamCar from "./DreamCar";
import FavoriteCar from "./FavoriteCar";
import BelovedCar from "./BelovedCar";

import CarContext from "./CarContext";

const Car = () => {
  const [carState, setCarState] = useState("Mitsubishi Lancer Evolution 9");

  return (
    <div>
      <CarContext.Provider
        value={{ car: carState !== "" ? carState : "Honda Civic" }}
      >
        <DreamCar />
        <FavoriteCar />
        <BelovedCar />
      </CarContext.Provider>

      <SelectCar onChange={setCarState} />
    </div>
  );
};

export default Car;
