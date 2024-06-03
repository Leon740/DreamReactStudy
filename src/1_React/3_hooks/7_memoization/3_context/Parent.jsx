/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  useState, useEffect, useMemo,
} from 'react';

import CarContext from './CarContext';
import ThemeContext from './ThemeContext';

import CarSelect from './CarSelect';
import CarDisplay from './CarDisplay';
import ThemeToggler from './ThemeToggler';

// === Concept
// === Problem
// 1 parent, 2 children
// on each state update children re-render
// === Solution
// (useMemo) for (Context), create (multiple contexts)
// update (context value) only when (dependency array) is changed

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

  const carContextValue = useMemo(() => ({
    car: stCar,
    onChange: fnStCarOnChange,
  }), [stCar]);

  const themeContextValue = useMemo(() => ({
    darkTheme: stDarkTheme,
    onChange: fnStDarkThemeOnChange,
  }), [stDarkTheme]);

  return (
    <div className="container pt-5">
      <CarContext.Provider value={carContextValue}>
        <CarSelect />
        <CarDisplay />
      </CarContext.Provider>
      <ThemeContext.Provider value={themeContextValue}>
        <ThemeToggler />
      </ThemeContext.Provider>
    </div>
  );
}
export default Parent;
