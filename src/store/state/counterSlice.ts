import { createSlice, Slice, PayloadAction } from '@reduxjs/toolkit';

// 为 slice state 定义一个类型
interface CounterState {
  value: number;
}

// 使用该类型定义一个state
const initialState: CounterState = {
  value: 0,
};

// 1.创建一个 Slice, 可以理解为每个业务一个分片
export const counterSlice: Slice = createSlice({
  name: 'counter',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  // 定义reducer，包括多个函数
  reducers: {
    // 定义一个加的方法
    increment: state => {
      state.value += 1;
    },
    // 定义一个减的方法
    decrement: state => {
      state.value -= 1;
    },
    // action creator函数，使用 PayloadAction 类型声明 `action.payload` 的内容, 也就是我们要传过来的number值
    // toolkit内部调用了immer包，我们可以直接对state对象做修改，不用解构旧的state
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 2.导出 slice 的 action 和 reducer

// 直接导出action，导出加减的方法
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// 导出的是 reducer, 方便后续对 reducer 进行组合
export default counterSlice.reducer;
