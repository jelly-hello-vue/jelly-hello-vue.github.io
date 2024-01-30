import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp_FQg3nOs0RjDzZ6H8Dfrs1sQcY0omMU",
  authDomain: "jelly2-33364.firebaseapp.com",
  projectId: "jelly2-33364",
  storageBucket: "jelly2-33364.appspot.com",
  messagingSenderId: "992259465383",
  appId: "1:992259465383:web:74806435f070c6ee92fb82",
  measurementId: "G-Y420KW7K4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
