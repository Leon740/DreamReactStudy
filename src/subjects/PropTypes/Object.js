import React from "react";
import PropTypes from "prop-types";

const Object = ({ object }) => {
  const { name, model, year } = object;

  return (
    <tr>
      <td>{name}</td>
      <td>{model}</td>
      <td>{year}</td>
    </tr>
  );
};

Object.propTypes = {
  object: PropTypes.object.isRequired,
};

export default Object;
