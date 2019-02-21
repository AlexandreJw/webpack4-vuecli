import './index.css'
import './scss.scss'
import router from './router/router'
import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import axios from 'axios'
import socket from './plugin/find-socket/socket'
const SOCKET_URL = 'http://localhost:3000'
Vue.use(socket, SOCKET_URL)
Vue.prototype.axios = axios
new Vue({
=======
vue = new Vue({
>>>>>>> 6c9db2ca3effab5c35c81415908f4e3e767288fc
  el: '#app',
  name: 'App',
  router,
  render: h => h(App)
})