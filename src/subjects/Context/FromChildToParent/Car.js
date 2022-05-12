import React, { useState } from "react";
import SelectCar from "./SelectCar";

import DreamCar from "./DreamCar";
import FavoriteCar from "./FavoriteCar";
import BelovedCar from "./BelovedCar";

import CarContext from "./CarContext";

const Car = () => {
  const [carName, setCarName] = useState("Mitsubishi Lancer Evolution 9");
  const contextValue = { carName, setCarName };

  return (
    <div>
      <CarContext.Provider value={contextValue}>
        <SelectCar />

        <DreamCar />
        <FavoriteCar />
        <BelovedCar />
      </CarContext.Provider>
    </div>
  );
};

export default Car;
