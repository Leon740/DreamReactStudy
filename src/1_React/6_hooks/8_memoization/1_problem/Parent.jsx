import React, { useState, useEffect } from 'react';
import CarSelect from './CarSelect';
import CarDisplay from './CarDisplay';
import ThemeToggler from './ThemeToggler';

// === Concept
// === Problem
// 1 parent, 2 children
// on each state update children re-render
// === Solution
// useCallback, memo

function Parent() {
  const [stCar, setStCar] = useState('Audi');
  const [stDarkTheme, setStDarkTheme] = useState(false);

  function fnStCarOnChange(car) {
    console.log('fnStCarOnChange');
    setStCar(car);
  }
  function fnStDarkThemeOnChange() {
    console.log('fnStDarkThemeOnChange');
    setStDarkTheme((prev) => !prev);
  }

  useEffect(() => {
    console.warn('fnStCarOnChange');
  }, [fnStCarOnChange]);
  useEffect(() => {
    console.warn('fnStDarkThemeOnChange');
  }, [fnStDarkThemeOnChange]);

  return (
    <div className="container pt-5">
      <CarSelect onChange={fnStCarOnChange} />
      <CarDisplay car={stCar} />
      <ThemeToggler darkTheme={stDarkTheme} onChange={fnStDarkThemeOnChange} />
    </div>
  );
}
export default Parent;
