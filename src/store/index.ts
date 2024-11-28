/*
 * @Description: 状态管理配置
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './state/reducer';

// configureStore创建一个store对象, store全局只有一个
const store = configureStore({
  // 合并多个Slice
  reducer: rootReducer,
});

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型 https://cn.redux.js.org/tutorials/typescript-quick-start
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
