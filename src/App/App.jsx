import React from 'react';
import './App.scss';
import { ErrorBoundary } from '1_React/11_optimizations/7_error_boundary/ErrorBoundary';
import Loader from '../1_React/11_optimizations/3_loader/Loader';

// linear O(n)
// n> O>
function fn(n = 1) {
  if (n === 1) {
    return 1;
  }
  let left = 2;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squared = mid * mid;

    if (squared === n) {
      return true;
    } else if (squared > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
console.log(fn());
// function fn(n = 16) {
//   for (let i = 2; i < n; i++) {
//     if (i === n / i) {
//       console.log(i);
//     }
//   }
// }
// console.log(fn());

function App() {
  return (
    // StrictMode
    <ErrorBoundary fallback={<h1>Error</h1>}>
      <Loader>t</Loader>
    </ErrorBoundary>
  );
}
export default App;
