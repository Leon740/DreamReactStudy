import React, { useState, useMemo } from 'react';
import CarContext from './CarContext';
import CarSelect from './CarSelect';
import CarDream from './CarDream';
import CarFavorite from './CarFavorite';
import CarBeloved from './CarBeloved';

function Car() {
  const [car, setCar] = useState('Evo');
  const contextValue = useMemo(() => ({
    car,
    changeCar: setCar,
  }), [car]);

  return (
    <div className="container pt-5">
      <CarContext.Provider
        value={contextValue}
      >
        <CarSelect />
        <CarDream />
        <CarFavorite />
        <CarBeloved />
      </CarContext.Provider>
    </div>
  );
}

export default Car;
