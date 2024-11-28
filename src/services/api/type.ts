/*
 * @Description: 所有接口入参配型定义
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */
/** 用户信息 */
export interface UserLoginParams {
  mobile: number;
  code: number;
  email?: string;
  username?: string;
}

// 商品数据
export type ProductParams = {
  id: number;
};
