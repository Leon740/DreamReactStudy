import React from "react";
import CarFavorite from "./CarFavorite";
import CarDream from "./CarDream";

// Problem: we have 2 different components with similar logic

const Car = () => {
  return (
    <div>
      <CarFavorite />
      <CarDream />
    </div>
  );
};

export default Car;
