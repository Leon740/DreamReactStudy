import React, {
  useState, useEffect, useCallback,
} from 'react';
import CarSelect from './CarSelect';
import CarDisplay from './CarDisplay';
import ThemeToggler from './ThemeToggler';

// === Concept
// === Problem
// 1 parent, 2 children
// on each state update children re-render
// === Solution
// useCallback = returns (callback) which is updated when (dependency array) is changed
// in (dependency array) instead of variable (stCar), use function (setStCar), in this case (CarSelect) will never re-render

function Parent() {
  const [stCar, setStCar] = useState('Audi');
  const [stDarkTheme, setStDarkTheme] = useState(false);

  const fnStCarOnChange = useCallback((car) => {
    console.log('fnStCarOnChange');
    setStCar(car);
  }, [setStCar]);

  const fnStDarkThemeOnChange = useCallback(() => {
    console.log('fnStDarkThemeOnChange');
    setStDarkTheme((prev) => !prev);
  }, [setStDarkTheme]);

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
