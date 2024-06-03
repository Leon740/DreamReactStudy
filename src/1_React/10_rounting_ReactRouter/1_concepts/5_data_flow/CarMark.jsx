import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CARS_DATA from './cars_data.json';
import Breadcrumbs from '../4_useLocation/Breadcrumbs';

function CarMark() {
  const { mark } = useParams();

  const activeCar = CARS_DATA.find((car) => car.mark === mark);

  return (
    <section>
      <h1 className="text-2xl my-8">{activeCar.mark}</h1>
      <Breadcrumbs />
      <ul>
        {activeCar.models.map((model) => (
          <li key={model}>
            <Link to={model}>{model}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default CarMark;
