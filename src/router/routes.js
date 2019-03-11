/*
此模块用来配置所有的路由对象
 */

import Home from '../pages/Home/Home.vue'
import Catelogue from '../pages/Catelogue/Catelogue.vue'
import CategoryList from  '../pages/Catelogue/CategoryList.vue'
import Goods from '../pages/Goods/Goods.vue'
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
    redirect:'/catelogue/categorylist',
    children:[
      {
        name:'categorylist',
        path:'/catelogue/categorylist',
        component:CategoryList,
        meta:{
          isShow:true
        }
      },
      {
        path:'/catelogue/categorylist',

      }
    ],
    meta:{
      isShow:true
    }
  },
  {
    path:'/goods',
    component:Goods,
    meta:{
      isShow:true
    }
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
