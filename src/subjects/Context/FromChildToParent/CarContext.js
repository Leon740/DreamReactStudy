import React from "react";

const CarContext = React.createContext({
  carName: "Mitsubishi Lancer Evolution 9",
  setCarName: () => {},
});

export default CarContext;
