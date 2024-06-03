import React, { StrictMode, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Loader from '../3_loader/Loader';

import MainLayout from './MainLayout';

const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./AboutPage'));
const ContactPage = lazy(() =>
  import('./ContactPage').then((module) => ({ default: module.ContactPage }))
);

function App() {
  return (
    <StrictMode>
      <Loader>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Loader>
    </StrictMode>
  );
}
export default App;
