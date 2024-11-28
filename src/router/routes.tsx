import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

const Center = lazy(() => import('@/views/center'));
const Home = lazy(() => import('@/views/home'));
const Test = lazy(() => import('@/views/test'));
const NotFound = lazy(() => import('@/components/notFound'));
const Layout = lazy(() => import('@/views/layout'));

function routesInit() {
  return (
    <>
      {/* <div>Loading</div> */}
      <Suspense fallback={''}>
        <Routes>
          <Route path="/" element={<Navigate to="/layout"></Navigate>}></Route>
          <Route path="/" element={<Layout></Layout>}>
            {/* 二级路由: 声明home和test为layout的嵌套路由 */}
            <Route index element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="test" element={<Test></Test>}></Route>
          </Route>
          <Route path="/center" element={<Center></Center>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default routesInit;
