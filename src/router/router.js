import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routers = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName:"home" */'../components/index/index.vue')
<<<<<<< HEAD

  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName:"login" */'../components/login/index.vue')

=======
>>>>>>> 6c9db2ca3effab5c35c81415908f4e3e767288fc
  }
]
export default new Router({
  routes: routers
})
