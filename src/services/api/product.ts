/*
 * @Description: 商品业务请求接口的函数
 * @Author: Boson
 * @Date: 2024-11-28 11:28:57
 */
import { GET } from '../axios/method';
import { ProductParams } from './type';
import API from './api';

// 用户登录
export function getProduct(params: ProductParams) {
  return GET(API.APP_product_list, params);
}
