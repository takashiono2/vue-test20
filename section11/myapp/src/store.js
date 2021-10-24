import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    addresses: []
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addAddress (state, {id,address}) {
      address.id = id
      state.addresses.push(address)
    },
    //findIndexは、条件にあうindexを探して見つけた最初のIndexを返す
    updateAddress(state, {id,address}) {
      const index = state.addresses.findIndex(address => address.id === id)
      state.addresses[index] = address
    }
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)
    },
    //collecitonでパスを指定 
    //then()以下は成功した場合、(と失敗した場合）の処理、非同期にthen()の処理が成功したらthenより前を処理
    //Snapshotは、data()でドキュメントのデータが取れる。ドキュメントのデータ(Jsonデータの部分)
    fetchAddresses({getters,commit}){
      firebase.firestore().collection(`users/${getters.uid}/addresses`).get().then(snapshot=>{
        snapshot.forEach(doc=>commit('addAddress',{ id: doc.id, address: doc.data()}))
      })
    },
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout () {
      firebase.auth().signOut()
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    },
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
    addAddress ({ getters,commit }, address) {
      if(getters.uid)
      firebase.firestore().collection(`users/${getters.uid}/addresses`).add(address).then(doc => {
      commit('addAddress', { id: doc.id, address })
      })
    }
  },
  //doc(id).update(address)では、doc(id)でidを渡して、update(address)を更新している
  //mutationのが実行（commit）されたら、firestoreからデータをとってくる
  updateAddress({ getters,commit },{ id,address }){
    if(getters.uid){
      firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).update(address).then(() => {
        commit('updateAddress', { id, address })
      })
    }
  },
  //getAddressById: stateより右は、関数を返す関数
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : '',
    getAddressById: state => id => state.addresses.find(address => address.id === id)
  }
})