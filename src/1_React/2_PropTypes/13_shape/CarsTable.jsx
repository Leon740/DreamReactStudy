import React from 'react';
import PropTypes from 'prop-types';

function CarsTable({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

CarsTable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarsTable;
