import { combineReducers } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import productSlice from './productSlice';

const reducerObj = {
  counter: counterSlice,
  product: productSlice,
};
const rootReducer = combineReducers(reducerObj);

export default rootReducer;
