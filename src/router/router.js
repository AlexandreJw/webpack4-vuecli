import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routers = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName:"home" */ '../components/index/index.vue')
  }
]
export default new Router({
  routes: routers
})
