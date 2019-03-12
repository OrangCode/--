/*
 包含n个用于间接修改更新状态数据的方法的对象
 */

import {
  reqKingKong,
  reqClassify,
  reqTabs,
  reqRecommendData,
  reqAutoRecommendData,
  reqTabData,
  reqList,
  reqColection,
  reqInitSearch,
} from '../api'

import {
  KINGKONGMODULE,
  CLASSIFY,
  TOPLOADINGDATA,
  RECOMMEND,

  TABS,

  EXPERTTABDATA,
  NEWTABDATA,
  HOMETABDATA,

  SHOWTABDATA,
  SHOWCOLLECTION,
} from './mutation-types'

export default {
  //异步获取首页数据
  async getkingKongModule({commit}){
    const result = await reqKingKong()
    if(result.code === 0){
      commit(KINGKONGMODULE,result.data)
    }
  },

  //获取分类界面的数据
  async getClassify({commit}){
    const result = await reqClassify()
    if(result.code === 0){
      const classify = result.data
      commit(CLASSIFY,{classify})
    }
  },

  //获取识物界面的数据
  async getTabs({commit}){
    const result = await reqTabs()
    if(result.code === "200"){
      const tabs = result.data
      commit(TABS,{tabs})
    }
  },
  //识物下的推荐数据
  async getRecommendData({commit}){
    const result = await reqRecommendData()
    if(result.code === "200"){
      const recommend = result.data
      commit(RECOMMEND,{recommend})
    }
  }

}

