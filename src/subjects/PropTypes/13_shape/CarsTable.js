import React from "react";
import PropTypes from "prop-types";

const CarsTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

CarsTable.propTypes = {
  children: PropTypes.node,
};

export default CarsTable;
