import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

Vue.config.productionTip = false
  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: "AIzaSyAu513Zu5EOPNgxBjKJoea31j8qIc8v3sM",
    authDomain: "my-address-pj-93847.firebaseapp.com",
    databaseURL: "https://my-address-pj-93847firebaseio.com",
    projectId: "my-address-pj-93847",
    storageBucket: "my-address-pj-93847.appspot.com",
    messagingSenderId: "406719211567",
    appId: "1:406719211567:web:06be3b1255c8137dcdbeda",
    measurementId: "G-JSJPHX0W5X"
  };

  // Initialize Firebase
firebase.initializeApp(config);
  // const analytics = getAnalytics(firebase);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')
