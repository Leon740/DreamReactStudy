import React from "react";
import PropTypes from "prop-types";

const CarModel = ({ model }) => {
  return <u>{model}</u>;
};

CarModel.propTypes = {
  model: PropTypes.number.isRequired,
};

const Car = () => {
  return (
    <div>
      My Car is <b>Lancer Evo</b> <CarModel model={9} />
    </div>
  );
};

export default Car;
