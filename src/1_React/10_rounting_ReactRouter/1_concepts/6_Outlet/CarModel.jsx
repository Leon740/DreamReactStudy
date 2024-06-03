import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../4_useLocation/Breadcrumbs';

function CarModel() {
  const { mark, model } = useParams();

  return (
    <section>
      <h1 className="text-2xl my-8">
        {mark} {model}
      </h1>
      <Breadcrumbs />
    </section>
  );
}
export default CarModel;
