/*
 包含n个用于间接修改更新状态数据的方法的对象
 */

import {
  reqKingKong,
  reqClassify,
  reqGoods
} from '../api'

import {
  KINGKONGMODULE,
  CLASSIFY,
  GOODS
} from './mutation-types'

export default {
  //异步获取首页数据
  async getkingKongModule({commit}){
    const result = await reqKingKong()
    if(result.code === 0){
      commit(KINGKONGMODULE,result.data)
    }
  },
  async getClassify({commit}){
    const result = await reqClassify()
    if(result.code === 0){
      commit(CLASSIFY,result.data)
    }
  },
  async getGoods({commit}){
    const result = await reqGoods()
    if(result.code === 0){
      commit(GOODS,result.data)
    }
  }
}
