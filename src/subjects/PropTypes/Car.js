import React from "react";
import String from "./String";
import Array from "./Array";
import Bool from "./Bool";
import Func from "./Func/Func";
import Number from "./Number/Number";
import Node from "./Node/Node";
import Element from "./Element/Element";
import Children from "./Children/Children";

const Car = () => {
  const array = [
    { id: 0, name: "Toyota", model: "Supra 80", year: "2020" },
    { id: 1, name: "Mitsubishi", model: "Lancer Evo 9", year: "2018" },
    { id: 2, name: "Nissan", model: "Skyline R32", year: "2012" },
  ];

  return (
    <div className="car">
      <String string={"Toyota Supra"} />

      <Array array={array} />

      <Bool inStock />

      <Func />

      <Number />

      <Node />

      <Element />

      <Children />
    </div>
  );
};

export default Car;
