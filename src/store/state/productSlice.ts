import { createSlice, createAsyncThunk, Slice } from '@reduxjs/toolkit';
import { getProduct } from '@/services/api/product';

interface Product {
  list: object;
  totals: number;
  status: string;
}

const initialState: Product = {
  list: [],
  totals: 0,
  status: 'loading',
};

const params = {
  id: 100,
};

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const fetchProduct = createAsyncThunk('/product/list', async () => {
  // getProduct是我们获取商品数据定义的方法
  const response = await getProduct(params);
  return response.data;
});

export const productSlice: Slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // 数据请求完成后触发
    loadDataEnd: (state: Product, { payload }: { payload: { list: object; totals: number } }) => {
      state.list = payload.list;
      state.totals = payload.totals;
    },
  },
  // extraReducers字段可以让 slice 处理在别处定义的 actions，
  // 包括由 createAsyncThunk 或其他slice生成的actions。
  extraReducers(builder: any) {
    builder
      .addCase(fetchProduct.pending, (state: Product) => {
        console.log('请求进行中', state);
      })
      .addCase(
        fetchProduct.fulfilled,
        (state: Product, { payload }: { payload: { data: { list: object; totals: number } } }) => {
          console.log('fulfilled', payload);
          state.list = payload.data.list;
          state.totals = payload.data.totals;
        }
      )
      .addCase(fetchProduct.rejected, (state: Product, err: any) => {
        state.status = '请求失败';
        console.log('rejected', err);
      });
  },
});
// 导出方法
export const { loadDataEnd } = productSlice.actions;
export default productSlice.reducer;
