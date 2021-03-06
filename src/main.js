// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

//配置路由器
import router from './router'
import store from './store'
import './mock/mockServer'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render:h => h(App),
  router,
  store
})
