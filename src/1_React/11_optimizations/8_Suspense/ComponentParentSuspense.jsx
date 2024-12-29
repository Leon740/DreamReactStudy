import { Suspense } from 'react';
import { ComponentChildFetch } from './ComponentChildFetch';

export function ComponentParentSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentChildFetch />
    </Suspense>
  );
}
