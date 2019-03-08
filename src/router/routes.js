/*
此模块用来配置所有的路由对象
 */

import Home from '../pages/Home/Home.vue'
import Catelogue from '../pages/Catelogue/Catelogue.vue'
import Goods from '../pages/Goods/Goods.vue'
import MyCenter from '../pages/MyCenter/MyCenter.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/catelogue',
    component:Catelogue
  },
  {
    path:'/goods',
    component:Goods
  },
  {
    path:'/mycenter',
    component:MyCenter,
    meta:{
      isShow:false
    }
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/',
    redirect:'/home'
  },
]
