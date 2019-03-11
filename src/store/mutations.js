/*
  用于直接更新状态数据的方法的对象
 */

import {
  KINGKONGMODULE,
  CLASSIFY,
  GOODS
} from './mutation-types'

export default {
  [KINGKONGMODULE](state,kingKongModule){
    state.kingKongModule = kingKongModule
  },
  [CLASSIFY](state,classify){
    state.classify = classify
  },
  [GOODS](state,goods){
    state.goods = goods
  }
}
