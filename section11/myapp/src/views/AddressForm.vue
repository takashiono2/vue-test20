<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <router-link :to="{name: 'address_edit'}"><!--'address_edit'へリンク-->
          <v-btn color="info">
            連絡先追加
          </v-btn>
        </router-link><!--'address_edit'へリンク-->
       
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field v-model="address.name" label="名前"></v-text-field>
               <v-text-field v-model="address.tel" label="電話番号"></v-text-field>
               <v-text-field v-model="address.email" label="メールアドレス"></v-text-field>
               <v-text-field v-model="address.address" label="住所"></v-text-field>
               <div class="text-center">
               <v-btn @click="$router.push({ name:'addresses'})">キャンセル</v-btn> 
               <v-btn color="info" @click="submit">保存</v-btn><!--ボタンをinfo色にclass="ml-2"-->
               </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      address: {}
    }
  },
  methods: {
    submit(){
      this.addAddress(this.address)
      this.$router.push({name: 'addresses'})
      this.address = {}
    },
  ...mapActions(['addAddress'])
  }
}
</script>
