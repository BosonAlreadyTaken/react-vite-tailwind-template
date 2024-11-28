import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/assets/styles/common.scss';
import App from './App.jsx';
// Routes和Route直接配置方式
import RoutesConfig from '@/router/routes';
// import RoutesConfig from '@/router/index'; // useRoutes管理路由方式
import store from '@/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RoutesConfig />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
