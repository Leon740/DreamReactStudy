import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function Component({ count }) {
  return (
    <section>
      <h3>{count()}</h3>
    </section>
  );
}

function ErrorDisplay({ children }) {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
}

function ErrorBoundaryExample() {
  return (
    <ErrorBoundary fallback={ErrorDisplay}>
      <Component count={5} />
      <Component count={() => 5} />
    </ErrorBoundary>
  );
}
export default ErrorBoundaryExample;
