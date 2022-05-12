import React from "react";

import CarContext from "./CarContext";

const FavoriteCar = () => {
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

export default FavoriteCar;
