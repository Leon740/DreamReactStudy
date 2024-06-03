import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(navigate);
  console.log(location);

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-2xl my-16">404</h1>
      <div className="flex gap-3">
        <button
          type="button"
          className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          onClick={() => navigate('/', { state: location.pathname })}
        >
          HomePage
        </button>
        <button
          type="button"
          className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          onClick={() => navigate('/contact')}
        >
          Contact
        </button>
      </div>
    </section>
  );
}

function NotFoundRoute() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default NotFoundRoute;
