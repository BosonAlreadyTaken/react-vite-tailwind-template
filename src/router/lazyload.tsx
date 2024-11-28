import { Suspense, lazy } from 'react';

const lazyload = (path: any) => {
  const Component = lazy(() => import(`@/views//${path}`));
  return (
    <Suspense fallback={<>请稍等·····</>}>
      <Component />
    </Suspense>
  );
};

export default lazyload;
