/*
此模块用来配置所有的路由对象
 */

import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Catelogue from '../pages/Catelogue/Catelogue.vue'
import CategoryList from  '../pages/Catelogue/CategoryList.vue'
import Goods from '../pages/Goods/Goods.vue'
import GoodList from '../pages/Goods/GoodList.vue'
import MyCenter from '../pages/MyCenter/MyCenter.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShow:true
    }
  },
  {
    path:'/catelogue',
    component:Catelogue,
    meta:{
      isShow:true
    },
    children:[
      {
        path:'/catelogue/categorylist/:id',
        component:CategoryList,
        meta:{
          isShow:true
        },
      },
      {
        path:'/catelogue',
        redirect:'/catelogue/categorylist/1022001'
      }
    ]
  },
  {
    path:'/goods',
    component:Goods,
    meta:{
      isShow:true
    },
    redirect:'/goods/goodlist/0',
    children:[
      {
        path:'/goods/goodlist/:id',
        component:GoodList,
        meta:{
          isShow:true
        }
      }
    ]
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/mycenter',
    component:MyCenter
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{
      isShow:true
    }
  },
  {
    path:'/',
    redirect:'/home'
  },
]
