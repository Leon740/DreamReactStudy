import React from "react";

import CarContext from "./CarContext";

const SelectCar = () => {
  return (
    <CarContext.Consumer>
      {({ setCarName }) => (
        <input onChange={event => setCarName(event.target.value)} />
      )}
    </CarContext.Consumer>
  );
};

export default SelectCar;
