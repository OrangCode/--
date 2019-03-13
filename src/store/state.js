/*
包含n个状态数据的对象
 */

export default {
  kingKongModule:{},   //首页数据
  classify:{},     //分类数据
  tabs:[],
  recommend:[],    //识物头部下面的推荐数据
  topLoadingData:{     //上拉加载数据
    hasMore:false,
    result: []
  },
  searchData: {},
  search:{},

  expertTabData: {   //获取其他数据
    hasMore:false,
    result: []
  },
  newTabData: {
    hasMore:false,
    result: []
  },
  homeTabData: {
    hasMore:false,
    result: []
  },


  // 晒单数据
  showTabData: {
    hasMore:false,
    type: 1,
    pagination: {
      page:0,
      size:0,
      total:0,
      totalPage:0
    },
    topicList: []
  },
  showCollection: {}
}
