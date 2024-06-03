import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '1_React/11_optimizations/7_error_boundary/ErrorBoundary';
import Loader from '../1_React/11_optimizations/3_loader/Loader';

function AppInner() {
  return 'AppInner';
}

function App() {
  return (
    // StrictMode
    <ErrorBoundary fallback={<h1>Error</h1>}>
      <Loader>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppInner />} />
          </Routes>
        </BrowserRouter>
      </Loader>
    </ErrorBoundary>
  );
}
export default App;
