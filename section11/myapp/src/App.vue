<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon v-show = "$store.state.login_user" @click.stop="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user"><!--ボタンを囲む-->
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items ><!--ボタンを囲む-->
    </v-toolbar> 
    <SideNav/>
    <v-content><!--router-viewを囲む-->
      <router-view/>
    </v-content><!--router-viewを囲む-->
  </v-app>
</template>

<script>
import firebase from 'firebase'
import SideNav from './components/SideNav'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components:{
    SideNav
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{//オブザーバーを設定
      if(user){
        this.setLoginUser(user)
        this.fetchAddresses()
         //ルーターオブジェクト として表される現在のルートが'home'なら
        this.$router.push({name:'addresses'})
      } else{
        this.deleteLoginUser()
        this.$router.push({name:'home'})
      }
    })
  },
  data () {
    return {
      //
    }
  },
  methods:{
    ...mapActions(['toggleSideMenu','setLoginUser','logout','deleteLoginUser','fetchAddresses'])
  }
}
</script>
