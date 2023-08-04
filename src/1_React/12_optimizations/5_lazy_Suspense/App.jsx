// === Concept
// lazy - Suspense is a combination used to dynamically import modules (Components)
import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
import MainLayout from './MainLayout';

// import default
const AboutPage = lazy(() => import('./AboutPage'));
// import named
const ContactPage = lazy(() =>
  import('./ContactPage').then((module) => ({ default: module.ContactPage }))
);

function App() {
  return (
    <main className="py-5">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </main>
  );
}

function AppContainer() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppContainer;
