import React, { useRef } from "react";
import CarItem from "./CarItem";

function carContainer(
  containerProps,
  WrappedComponent,
  wrappedComponentProps,
  ref
) {
  return () => (
    <div {...containerProps}>
      <WrappedComponent {...wrappedComponentProps} ref={ref} />
    </div>
  );
}

const Car = () => {
  const carFavoriteRef = useRef();

  const CarFavorite = carContainer(
    { className: "test" },
    CarItem,
    {
      type: "Favorite",
      initialValue: "Evo 9",
    },
    carFavoriteRef
  );

  CarFavorite.displayName = "CarFavorite";

  return (
    <div>
      <div>
        <code>CarFavorite</code>
        <CarFavorite />
      </div>

      <div className="mt-3">
        <code>Car</code>
        <div>
          <button
            className="btn btn-success"
            onClick={() => {
              carFavoriteRef.current.focus();
            }}
          >
            focus
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              carFavoriteRef.current.blur();
            }}
          >
            blur
          </button>
        </div>
      </div>
    </div>
  );
};

export default Car;
