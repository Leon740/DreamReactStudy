import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timer from './Timer';
// import Tabs from '../1_React/12_optimizations/6_dynamic_component/Tabs';
// import ErrorBoundary from '../1_React/12_optimizations/7_error_boundary/ErrorBoundary';

function AppInner() {
  // return <Tabs />;
  return <></>;
}

function App() {
  return (
    // StrictMode
    // <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/" element={<AppInner />} />
      </Routes>
    </BrowserRouter>
    // </ErrorBoundary>
  );
}
export default App;
