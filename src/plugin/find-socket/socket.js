/**
 * Created by Tommy on 2018/11/12 .
 */
import Observer from './Observer'
import Emitter from './Emitter'
import {AFTER_CHANGE} from './config'
export default {

  install (Vue, connection, store) {

    if (!connection) throw new Error('[Vue-Socket.io] cannot locate connection')

    let observer = new Observer(connection, store)

    Vue.prototype.$socket = observer.Socket

    Vue.mixin({
      created () {
        let sockets = this.$options['sockets']
        let user = sockets && sockets.user && typeof sockets.user === 'function' && sockets.user.call(this)
        if (user) {
          if (!sockets[user]) throw new Error(`[Vue-Socket.io] ${this.$options.name || ''} components ${user} socket modules is not defined`)
        }
        this.$options.socket = new Proxy({}, {
          set: (target, key, value) => {
            Emitter.addListener(key, value, this)
            target[key] = value
            return true
          },
          deleteProperty: (target, key) => {
            Emitter.removeListener(key, this.$options.socket[key], this)
            delete target.key
            return true
          }
        })

        if (sockets && !user) {
          Object.keys(sockets).forEach((key) => {
            this.$options.socket[key] = sockets[key]
          })
        }
        if (user) {
          Object.keys(sockets[user]).forEach((key) => {
            this.$options.socket[key] = sockets[user][key]
          })
        }
      },
      watch: {
        user (newValue, oldValue) {
          let NewSockets = this.$options['sockets'][newValue]
          // let OldSockets = this.$options['sockets'][oldValue]
          // OldSockets[AFTER_CHANGE] && typeof OldSockets[AFTER_CHANGE] === 'function' && OldSockets[AFTER_CHANGE].call(this)
          this.removeListener(oldValue)
          Object.keys(NewSockets).forEach((key) => {
            this.$options.socket[key] = NewSockets[key]
          })
        }
      },
      methods: {
        removeListener (oldValue) {
          let sockets = oldValue ? this.$options['sockets'][oldValue] : this.$options['sockets']
          if (sockets) {
            Object.keys(sockets).forEach((key) => {
              delete this.$options.socket[key]
            })
          }
        }
      },
      beforeDestroy () {
        let sockets = this.$options['sockets']
        let user = sockets && sockets.user && typeof sockets.user === 'function' && sockets.user.call(this)
        this.removeListener(user)
      }
    })
  }
}


