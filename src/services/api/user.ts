/*
 * @Description: 用户相关业务请求接口的函数
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */
import { GET, POST } from '../axios/method';
import { UserLoginParams } from './type';
import API from './api';

// 获取用户信息
export function getUserInfo() {
  const params = {
    token: 'aisndastoken',
  };
  return GET(API.APP_user_info, params);
}

// 用户登录
export function userLogin(params: UserLoginParams) {
  return POST(API.APP_user_login, params);
}
