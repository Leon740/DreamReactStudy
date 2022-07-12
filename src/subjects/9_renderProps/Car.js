import React from "react";
import PropTypes from "prop-types";

const Car = props => {
  return (
    <div>
      <p>
        My <b>Dream</b> is <u>Lancer Evo</u>
      </p>
      {props.favoriteCar()}
    </div>
  );
};

Car.propTypes = {
  favoriteCar: PropTypes.func.isRequired,
};

export default Car;
