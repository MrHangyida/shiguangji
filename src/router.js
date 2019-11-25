import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // (推荐)写法一 上面先import
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})
