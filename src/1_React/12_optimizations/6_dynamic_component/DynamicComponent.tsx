// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from 'react';

function componentName(folder = '', name = '') {
  console.log(`./${folder}/${name}`);
  return lazy(() => import(`./${folder}/${name}`).then((module) => ({ default: module[name] })));
}

interface DynamicComponentPropsI {
  folder: string;
  name: string;
}

function DynamicComponent({ folder = '', name = '' }: DynamicComponentPropsI) {
  const Component = componentName(folder, name);
  console.log(Component);

  return (
    <Suspense fallback={<p className="p-5 bg-yellow-600 border-2 border-yellow-600">Loading</p>}>
      <Component />
    </Suspense>
  );
}
export default DynamicComponent;
