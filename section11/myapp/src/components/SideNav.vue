<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary><!--サイドナビゲーションの開閉オプション,stateに初期値データあり-->
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://avatars2.githubusercontent.com/u/1363954?s=460&v=4">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Kazuya Kojima</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" :to="item.link"><!--toで遷移-->
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'ホーム', icon: 'home', link:{ name:'home' }},//home名前付きルート
        { title: '連絡先一覧', icon: 'list', link:{ name:'addresses' }}//addresses名前付きルート
      ]
    }
  }
}
</script>