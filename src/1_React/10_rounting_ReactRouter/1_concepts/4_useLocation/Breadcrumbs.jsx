import React from 'react';
import { useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();

  const breadcrumbs = location.pathname.split('/');

  return (
    <ul className="flex">
      {breadcrumbs.map((crumb, index) => (
        <li key={crumb}>
          <span>{crumb}</span>
          {index !== 0 && index !== breadcrumbs.length - 1 && (
            <span className="mx-1">/</span>
          )}
        </li>
      ))}
    </ul>
  );
}
export default Breadcrumbs;
