import React, { Suspense } from 'react';

const Car = React.lazy(() => import('./Car'));

function Lazy() {
  return (
    <div className="lazy__container">
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <div className="lazy__element">
          <Car />
        </div>
      </Suspense>
    </div>
  );
}

export default Lazy;

// Example:
// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Suspense>
//   </Router>
// );
