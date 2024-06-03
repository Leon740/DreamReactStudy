import React from 'react';
import {
  useOutletContext,
  useParams,
  Link,
  useSearchParams
} from 'react-router-dom';
import Breadcrumbs from '../4_useLocation/Breadcrumbs';

function CarMark() {
  const { mark } = useParams();
  const { data } = useOutletContext();
  const activeCar = data.find((car) => car.mark === mark);

  const [searchParams, setSearchParams] = useSearchParams({ model: 'Mark' });
  const newModel = searchParams.get('model');

  return (
    <section>
      <h1 className="text-2xl my-8">{activeCar.mark}</h1>

      <Breadcrumbs />

      <ul>
        {activeCar.models.map((model) => (
          <li key={model}>
            <Link to={model}>{model}</Link>
          </li>
        ))}
        <li key={newModel}>
          <Link to={`${newModel}`}>{newModel}</Link>
        </li>
      </ul>

      <div>
        <input
          type="text"
          className="border-2 border-black"
          value={newModel}
          onChange={(event) => setSearchParams({ model: event.target.value })}
        />
      </div>
    </section>
  );
}
export default CarMark;
