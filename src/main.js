import './index.css'
import './scss.scss'
import router from './router/router'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import socket from './plugin/find-socket/socket'
const SOCKET_URL = 'http://localhost:3000'
Vue.use(socket, SOCKET_URL)
Vue.prototype.axios = axios
new Vue({
  el: '#app',
  name: 'App',
  router,
  render: h => h(App)
})