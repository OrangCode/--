/*
  用于直接更新状态数据的方法的对象
 */

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
  [SEARCH](state,{search}){
    state.search = search
  },

  //首页数据
  [KINGKONGMODULE](state,kingKongModule){
    state.kingKongModule = kingKongModule
  },

  //分类数据
  [CLASSIFY](state,{classify}){
    state.classify = classify
  },

  [TABS](state,{tabs}){
    state.tabs = tabs
  },

  //识物的推荐数据
  [RECOMMEND](state,{recommend}){
    state.recommend = recommend
  },

  //上拉加载数据
  [TOPLOADINGDATA](state,{topLoadingData}){
    state.topLoadingData = topLoadingData
  },

  //其他数据
  [EXPERTTABDATA](state,{expertTabData}){
    state.expertTabData = expertTabData
  },
  [NEWTABDATA](state,{newTabData}){
    state.newTabData = newTabData
  },
  [HOMETABDATA](state,{homeTabData}){
    state.homeTabData = homeTabData
  },


  [SHOWTABDATA](state,{showTabData}){
    state.showTabData = showTabData
  },
  [SHOWCOLLECTION](state,{showCollection}){
    state.showCollection = showCollection
  },
  [GET_SEARCH_RESULT](state,{searchData}){
    state.searchData = searchData
  }
}
