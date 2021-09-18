import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({//storeを定義({
  state: {
    login_user: null,
    drawer: false,
    addresses: []
  },
  mutations: {
    setLoginUser(state,user){
      state.login_user = user
    },
    deleteLoginUser(state){
      state.login_user = null
    },
    toggleSideMenu(state){
      state.drawer = !state.drawer
    },
    addAddress (state, address) {
      state.addresses.push(address)
    }
  },
  actions: {
    setLoginUser({ commit },user){
      commit('setLoginUser',user)
    },
    deleteLoginUser({ commit }){
      commit('deleteLoginUser')
    },
    logout(){
      firebase.auth().signOut()
    },
    login(){
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    toggleSideMenu({ commit }){
      commit('toggleSideMenu')
    },
    addAddress ({ commit }, address) {
      commit('addAddress', address)
    }
  }
})
