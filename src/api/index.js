/*
包含n个接口请求函数的模块
 */

import ajax from './ajax'

//获取首页界面数据
export const reqKingKong = () => ajax('/kingkong')

//获取分类界面的数据
export const reqClassify = () => ajax('/classify')

//获取识物界面的数据
export const reqGoods = () => ajax('/goods')
