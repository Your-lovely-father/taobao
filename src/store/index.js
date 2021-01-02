import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState  from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    path:'' //存储home路径控制头部底部是否显示
  },

  mutations: {},

  actions: {},

  modules: {},
  plugins: [createPersistedState()]
})
