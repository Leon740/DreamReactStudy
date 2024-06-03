import React from 'react';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  console.log(location);

  return (
    <section>
      <h1 className="text-2xl my-8">HomePage</h1>
      <p className="text-1xl">user came from : {location.pathname}</p>
    </section>
  );
}
export default HomePage;
