import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CarsList from './5_data_flow/CarsList';
import CarMark from './5_data_flow/CarMark';
import CarModel from './5_data_flow/CarModel';
import CarsList1 from './6_outlet/CarsList';
import CarMark1 from './6_outlet/CarMark';
import CarModel1 from './6_outlet/CarModel';
import NavLinkWrapper from './2_NavLink/NavLinkWrapper';
import BackBtn from './3_navigate_useNavigate/BackBtn';
import NotFoundPage from './3_navigate_useNavigate/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <header className="py-8 border-b-2 border-black">
        <div className="container flex justify-between">
          <nav className="flex">
            <NavLinkWrapper to="/">HomePage</NavLinkWrapper>
            <NavLinkWrapper to="/about">AboutPage</NavLinkWrapper>
            <NavLinkWrapper to="/contact">ContactPage</NavLinkWrapper>
            <NavLinkWrapper to="/cars_list">CarsList</NavLinkWrapper>
            <NavLinkWrapper to="/cars_list_1">CarsListOutlet</NavLinkWrapper>
          </nav>
          <BackBtn />
        </div>
      </header>

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />

            {/* nested_routes */}
            <Route path="/cars_list">
              <Route index element={<CarsList />} />
              <Route path=":mark" element={<CarMark />} />
              <Route path=":mark/:model" element={<CarModel />} />
            </Route>

            {/* 6_outlet */}
            <Route path="/cars_list_1" element={<CarsList1 />}>
              <Route path=":mark" element={<CarMark1 />} />
              <Route path=":mark/:model" element={<CarModel1 />} />
            </Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}
export default App;
