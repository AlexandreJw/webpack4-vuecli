import './index.css'
import './scss.scss'
import router from './router/router'
import Vue from 'vue'
import App from './App.vue'
console.log('a')
vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})