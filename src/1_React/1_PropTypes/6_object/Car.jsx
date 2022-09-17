import React from 'react';
import CarsTable from './CarsTable';

function Car() {
  const carsObject = {
    0: {
      id: 0, name: 'Toyota', model: 'Supra', year: '2010',
    },
    1: {
      id: 1, name: 'Mitsubishi', model: 'Lancer Evo 9', year: '2018',
    },
    2: {
      id: 2, name: 'Nissan', model: 'R32', year: '2016',
    },
  };

  return <CarsTable carsObject={carsObject} />;
}

export default Car;
