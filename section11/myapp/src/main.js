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
    apiKey: "AIzaSyCvcBENXvPA9b8cdx3Zycu5uAsiDoUQLu0",
    authDomain: "my-address-pj-cad7f.firebaseapp.com",
    databaseURL: "https://my-address-pj-cad7f.firebaseio.com",
    projectId: "my-address-pj-cad7f",
    storageBucket: "my-address-pj-cad7f.appspot.com",
    messagingSenderId: "316956478168",
    // appId: "1:316956478168:web:42bf7bb76061f08d7365ad",
    // measurementId: "G-WHGEY0Y4PE"
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
