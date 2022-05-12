import React, { useState } from 'react';
import DisplayCar from './DisplayCar';
import SelectCar from './SelectCar';

const DreamCar = () => {
  const [carState, setCarState] = useState('Lancer Evolution 9');

  return (
    <div>
      <DisplayCar car={carState} />
      <SelectCar onChange={setCarState} />
    </div>
  );
};

export default DreamCar;
