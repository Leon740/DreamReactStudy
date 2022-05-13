import React from "react";
import PropTypes from "prop-types";

const CarName = ({ name }) => {
  return <i>{name}</i>;
};

CarName.propTypes = {
  name: PropTypes.string.isRequired,
};

const CarModel = ({ model }) => {
  return <u>{model}</u>;
};

CarModel.propTypes = {
  model: PropTypes.number.isRequired,
};

const MultipleComponentsInFile = () => {
  return (
    <div>
      My Car is <CarName name="Lancer Evo" /> <CarModel model={9} />
    </div>
  );
};

export default MultipleComponentsInFile;
