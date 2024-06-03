import React, { Suspense } from 'react';
// eslint-disable-next-line import/extensions
import { BiLoader } from 'react-icons/bi';
import { NavLink, Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <header className="flex gap-8 p-4">
        <NavLink to="/" className="px-2">
          HomePage
        </NavLink>
        <NavLink to="/about" className="px-2">
          AboutPage
        </NavLink>
        <NavLink to="/contact" className="px-2">
          ContactPage
        </NavLink>
      </header>

      <Suspense fallback={<BiLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default MainLayout;
