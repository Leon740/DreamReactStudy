import React from "react";

import CarContext from "./CarContext";

const DreamCar = () => {
  return (
    <CarContext.Consumer>
      {({ car }) => (
        <p>
          My <b>Dream</b> Car is <u>{car}</u>
        </p>
      )}
    </CarContext.Consumer>
  );
};

export default DreamCar;
