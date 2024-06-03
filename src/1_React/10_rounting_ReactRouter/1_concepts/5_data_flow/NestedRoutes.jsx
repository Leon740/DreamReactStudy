import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsList from './CarsList';
import CarMark from './CarMark';
import CarModel from './CarModel';

function NestedRoutes() {
  return (
    <Routes path="/cars_list">
      <Route index element={<CarsList />} />
      <Route path=":mark" element={<CarMark />} />
      <Route path=":mark/:model" element={<CarModel />} />
    </Routes>
  );
}
export default NestedRoutes;
