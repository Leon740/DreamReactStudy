import React from "react";
import PropTypes from "prop-types";

const FavoriteCar = ({ car }) => {
  return (
    <p>
      My <b>Favorite</b> Car is <u>{car}</u>
    </p>
  );
};

FavoriteCar.propTypes = {
  car: PropTypes.string.isRequired,
};

const Car = () => {
  return (
    <div>
      <FavoriteCar car="Evo 9" />
    </div>
  );
};

export default Car;
