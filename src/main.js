import './index.css'
import './scss.scss'
import router from './router/router'
import Vue from 'vue'
import App from './App.vue'
// import socket from './plugin/find-socket/socket'

// const SOCKET_URL = 'http://localhost:3000'
// Vue.use(socket, SOCKET_URL)
import MintUI from 'mint-ui'
import Vuex from './vuex'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) 
Vue.use(Vuex)
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

// actions are what components will be able to
// call as store.actions.xxx
// note these are not the final functions the
// components will be calling.
const actions = {

  // for simple actions that just dispatches a single mutation,
  // we can just provide the mutation type.
  increment: INCREMENT,
  decrement: DECREMENT,

  // for a normal action function, it always recieves the store
  // instance as the first argument, from which we can get the
  // dispatch function and the state object. Any additional
  // arguments will follow the store argument.
  incrementIfOdd: ({ dispatch, state }) => {
    if ((state.count + 1) % 2 === 0) {
      dispatch(INCREMENT)
    }
  },

  // Same thing for async actions.
  incrementAsync: ({ dispatch }) => {
    setTimeout(() => {
      dispatch(INCREMENT)
    }, 1000)
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by middlewares
// for debugging purposes.
const mutations = {
  [INCREMENT] (state) {
    state.count++
  },
  [DECREMENT] (state) {
    state.count--
  }
}

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).
// 
// You can also provide middlewares, which is just an array of
// objects containing some hooks to be called at initialization
// and after each mutation.
let store  = new Vuex.Store({
  state,
  actions,
  mutations
})
new Vue({
  el: '#app',
  name: 'App',
  store: store,
  router,
  render: h => h(App)
})