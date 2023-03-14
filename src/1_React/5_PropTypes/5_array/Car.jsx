import React from 'react';
import CarsTable from './CarsTable';

function Car() {
  const carsArray = [
    {
      id: 0, name: 'Toyota', model: 'Supra', year: '2010',
    },
    {
      id: 1, name: 'Mitsubishi', model: 'Lancer Evo 9', year: '2018',
    },
    {
      id: 2, name: 'Nissan', model: 'R32', year: '2016',
    },
  ];

  return <CarsTable carsArray={carsArray} />;
}

export default Car;
