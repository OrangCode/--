/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'

export default new VueRouter({
  //配置所有的路由
  routes
})
