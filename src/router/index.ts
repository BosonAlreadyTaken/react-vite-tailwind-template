import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Center = lazy(() => import('@/views/center'));
const Home = lazy(() => import('@/views/home'));
const Test = lazy(() => import('@/views/test'));

type RouteItem = RouteObject & {
  name: string;
  title: string;
};

// useRoutes管理路由
export const routesList: RouteItem[] = [
  {
    path: '',
    name: 'App',
    Component: Home,
    title: '首页',
  },
  {
    path: '/home',
    name: 'home',
    Component: Home,
    title: '首页',
    children: [],
  },
  {
    path: '/center',
    name: 'center',
    Component: Center,
    title: '个人中心',
  },
  {
    path: '/test',
    name: 'test',
    Component: Test,
    title: '测试',
  },
];

function RenderRouter() {
  const element = useRoutes(routesList);
  return element;
}

export default RenderRouter;
