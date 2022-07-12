import React from "react";
import Car from "./Car";

const Component = () => {
  // === Concept
  // render prop is a prop value of which is a function

  return (
    <Car
      favoriteCar={() => {
        return (
          <p>
            My <b>Favorite</b> is <u>Toyota Cresta</u>
          </p>
        );
      }}
    />
  );
};

export default Component;
