import React from 'react';
import { Link } from 'react-router-dom';
import CARS_DATA from './cars_data.json';

function CarsList() {
  return (
    <section>
      <h1 className="text-2xl my-8">CarsList</h1>
      <ul>
        {CARS_DATA.map((car) => (
          <li key={car.mark} className="my-3">
            <Link to={car.mark}>
              <h3 className="text-lg">{car.mark}</h3>
            </Link>

            <ul className="flex -mx-2">
              {car.models.map((model) => (
                <li key={model} className="mx-2">
                  <Link to={`${car.mark}/${model}`}>{model}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default CarsList;
