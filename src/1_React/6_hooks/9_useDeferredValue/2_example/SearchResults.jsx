/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
import React from 'react';
import CARS_DATA from './cars_data.json';

function SearchResultsProblem({ carName }) {
  function fnSanitizeString(string) {
    return string.trim().toLowerCase();
  }

  const activeCars = CARS_DATA.filter((car) => fnSanitizeString(car.name).includes(fnSanitizeString(carName)));

  return (
    <ul>
      {activeCars.map((car, index) => (
        <li key={index}>
          <span dangerouslySetInnerHTML={{ __html: fnSanitizeString(car.name).replace(fnSanitizeString(carName), `<span style='background-color: yellow;'>${fnSanitizeString(carName)}</span>`) }} />
        </li>
      ))}

    </ul>
  );
}
export default SearchResultsProblem;
