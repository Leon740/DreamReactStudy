import React from "react";
import CarItem from "./CarItem";

// Solution: use HOC

// Concept
// HOC - High Order Component
// HOC is a function which accepts a component and returns a new component

function carContainer(containerProps, WrappedComponent, wrappedComponentProps) {
  return () => (
    <div {...containerProps}>
      <WrappedComponent {...wrappedComponentProps} />
    </div>
  );
}

const Car = () => {
  // (CarFavorite) and (CarDream) are the HOCs
  const CarFavorite = carContainer({ className: "test" }, CarItem, {
    type: "Favorite",
    initialValue: "Evo 9",
  });
  const CarDream = carContainer({ className: "test" }, CarItem, {
    type: "Dream",
    initialValue: "Supra",
  });

  // example of skipped argument
  // const _ = undefined;
  // const CarDream = carContainer(_, CarItem, {
  //   type: "Dream",
  //   initialValue: "Supra",
  // });

  // for debug in devTools
  CarFavorite.displayName = "CarFavorite";
  CarDream.displayName = "CarDream";

  return (
    <div>
      <CarFavorite />
      <CarDream />

      {/* instead of 2 similar components */}
      {/* <CarItem type="Favorite" initialValue="Evo 9" />
      <CarItem type="Dream" initialValue="Supra" /> */}
    </div>
  );
};

export default Car;
