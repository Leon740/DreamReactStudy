import React from "react";

import CarContext from "./CarContext";

const BelovedCar = () => {
  return (
    <CarContext.Consumer>
      {({ carName }) => (
        <p>
          My <b>Dream</b> Car is <u>{carName}</u>
        </p>
      )}
    </CarContext.Consumer>
  );
};

export default BelovedCar;
