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
  reqSearchResult
} from '../api'

import {
  KINGKONGMODULE,
  CLASSIFY,
  TOPLOADINGDATA,
  RECOMMEND,

  SEARCH,
  TABS,

  EXPERTTABDATA,
  NEWTABDATA,
  HOMETABDATA,

  SHOWTABDATA,
  SHOWCOLLECTION,
  GET_SEARCH_RESULT
} from './mutation-types'

export default {
  async getSearch({commit}){
    const result = await reqInitSearch()
    const search = result.data
    if(result.code === '200'){
      commit(SEARCH,{search})
    }
  },


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
  },


  //推荐数据上拉加载
  async getTopLoadingData({commit},{page,size}){
    const result = await reqAutoRecommendData(page,size)
    if(result.code === "200"){
      const topLoadingData = result.data
      commit(TOPLOADINGDATA,{topLoadingData})
    }
  },

  //获取识物其他组件数据
  async getTabData({commit},{page,size,tabId}){
    const result = await reqTabData(page,size,tabId)
    if(result.code === "200"){
      const tabData = result.data
      commit(TOPLOADINGDATA,{tabData})
    }
  },

  async getSearchResult({commit},userInput){
    const result = await reqSearchResult({keywordPrefix: userInput})
    if(result.code === "200"){
      const searchData = result.data
      commit(GET_SEARCH_RESULT,{searchData})
    }
  }

}

