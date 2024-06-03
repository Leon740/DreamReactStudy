// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from 'react';
import Loader from './Loader';

function getComponentNameFn(folder, name) {
  console.log(`./${folder}/${name}`);
  return lazy(() => import(`./${folder}/${name}`));
}

function DynamicComponent({ folder, name }) {
  const Component = getComponentNameFn(folder, name);

  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
}
export default DynamicComponent;
