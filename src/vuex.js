let Vue //存储Vue变量。一是为了注入$store到各个Vue组件，二是后续要用到Vue的双向绑定的功能
export class Store{
    constructor ({
        state = {},
        actions = {},
        mutations = {}
        }){
        //依赖vue双向绑定
        this._vm = new Vue({
            data : state
        })
        this.actions = Object.create(null)
        //构造下action。兼容字符串和function两种模式
        this._setupActions(actions);
        //构造mutations
        this._setupMutations(mutations);
    }
    get state (){
        //页面中通过此方法获取state
        return this._vm._data;
    }
    set state (v){
        throw new Error('[Vuex] vuex root state is read only.')
    }
    _setupActions (actions) {
        debugger
        this._actions = Object.create(null);
        Object.keys(actions).forEach(name =>{
            this._actions[name] = createAction(actions[name],this); //兼容string 和function的写法
            if(!this.actions[name]){
                this.actions[name] = (...args) =>this._actions[name](...args)
            }
        })
    }
    _setupMutations(mutations){
        this._mutations = Array.isArray(mutations) ? mergeObjects(mutations,true) : mutations
    }
    /**
     * 执行mutation
     */
    dispatch (type, ...payload) {
        const mutation = this._mutations[type];
        const state = this.state;
        if(mutation){
            this._dispatching = true
            mutation(state,...payload)
            this._dispatching = false
        }else{
            console.warn(`[vuex] unknown mutation:${type}`)
        }
    }
}
export function install (_Vue){
    Vue = _Vue
    const _init = Vue.prototype._init;
    Vue.prototype._init = function(options){
        options = options || {}
        if(options.store){
            this.$store = options.store
        }else if(options.parent && options.parent.$store){
            this.$store = options.parent.$store
        }
        _init.call(this,options)
    }
}
export default {
    Store,install
}
function createAction (action, store) {
    if (typeof action === 'string') {
        // simple action string shorthand
        return (...payload) => store.dispatch(action, ...payload)
      } else if (typeof action === 'function') {
        // normal action
        return (...payload) => action(store, ...payload)
      }
  }