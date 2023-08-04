import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <header className="flex">
        <Link to="/" className="ml-2 mr-2">
          HomePage
        </Link>
        <Link to="/about" className="ml-2 mr-2">
          AboutPage
        </Link>
        <Link to="/contact" className="ml-2 mr-2">
          ContactPage
        </Link>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default MainLayout;
