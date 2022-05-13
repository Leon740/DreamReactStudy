import React from "react";
import PropTypes from "prop-types";
import Object from "./Object";

const Array = ({ array }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {array.map(item => (
          <Object key={item.id} object={item} />
        ))}
      </tbody>
    </table>
  );
};

Array.propTypes = {
  array: PropTypes.array.isRequired,
};

export default Array;
