import React from "react";
import PropTypes from "prop-types";

const GrandChild = ({ carName, setCarName }) => {
  return (
    <>
      <code>GrandChild :</code>
      <br />
      <input
        value={carName}
        onChange={event => setCarName(event.target.value)}
      />
    </>
  );
};

GrandChild.propTypes = {
  carName: PropTypes.string.isRequired,
  setCarName: PropTypes.func.isRequired,
};

export default GrandChild;
