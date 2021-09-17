import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    toggleSideMenu(state){
      state.drawer = !state.drawer
    }//toggleSideMenu関数でtrue,falseの更新
  },
  actions: {
    toggleSideMenu({ commit }){
      commit('toggleSideMenu')
    }
  },
  modules: {
  }
})
